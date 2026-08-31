"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Play, X } from "lucide-react";
import { GalleryImage, GallerySection, aspectRatioOf } from "@/lib/project-images";

type ProjectGalleryProps = {
  sections: GallerySection[];
  /** Used in the lightbox label so a figure has context out of page flow. */
  projectTitle: string;
};

/**
 * A numbered walkthrough rather than a mosaic.
 *
 * The previous grid cropped every figure into one of three fixed boxes, which
 * mangled screenshots and portrait shots alike and left the order meaningless.
 * Reading top to bottom, one figure per row, lets each image keep its real
 * proportions and lets the sequence carry the process: what the thing is, then
 * what happens first, then what happens next.
 */
export function ProjectGallery({ sections, projectTitle }: ProjectGalleryProps) {
  // The lightbox steps through every figure on the page, so it works against
  // one flat list while the page itself renders the sections.
  const images = sections.flatMap((section) => section.images);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Focus returns to the figure the lightbox was opened from, so keyboard
  // users are not dropped back at the top of the document on close.
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const isOpen = openIndex !== null;

  const close = useCallback(() => {
    setOpenIndex((current) => {
      if (current !== null) {
        triggerRefs.current[current]?.focus();
      }
      return null;
    });
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) =>
        current === null ? current : (current + delta + images.length) % images.length,
      );
    },
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        return;
      }
      // While a video has focus the arrow keys are its seek controls, so
      // stepping between figures here would fight the player.
      if ((event.target as HTMLElement | null)?.tagName === "VIDEO") {
        return;
      }
      if (event.key === "ArrowRight") {
        step(1);
      } else if (event.key === "ArrowLeft") {
        step(-1);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, step]);

  if (images.length === 0) {
    return null;
  }

  const active = openIndex === null ? null : images[openIndex];

  return (
    <>
      {sections.map((section, sectionIndex) => {
        // Figures number from one inside their own section, so a reader sees
        // "01, 02" per build rather than a running count across the page.
        const offset = sections
          .slice(0, sectionIndex)
          .reduce((total, previous) => total + previous.images.length, 0);

        return (
          <section className="figure-section" key={section.title ?? "ungrouped"}>
            {section.title ? (
              <div className="figure-section-head">
                <h3 className="figure-section-title">{section.title}</h3>
                <span className="figure-section-rule" />
                <span className="figure-section-count">
                  {section.images.length} {section.images.length === 1 ? "figure" : "figures"}
                </span>
              </div>
            ) : null}

            <ol className="figure-list">
              {section.images.map((image, indexInSection) => {
                const index = offset + indexInSection;
                return (
                  <li className="figure" key={image.src}>
                    <div className="figure-head">
                      <span className="figure-index">
                        {String(indexInSection + 1).padStart(2, "0")}
                      </span>
                      {image.stage ? <span className="figure-stage">{image.stage}</span> : null}
                    </div>

                    <div className="figure-body">
                      <button
                        aria-label={
                          image.kind === "video"
                            ? `Play: ${image.alt}`
                            : `View full size: ${image.alt}`
                        }
                        className="figure-media"
                        onClick={() => setOpenIndex(index)}
                        ref={(node) => {
                          triggerRefs.current[index] = node;
                        }}
                        style={{
                          // The figure's real proportions, so nothing is
                          // cropped and the space is reserved before it loads.
                          aspectRatio: aspectRatioOf(image),
                          // Never upscale past the source.
                          maxWidth: image.width ? `${image.width}px` : undefined,
                        }}
                        type="button"
                      >
                        {image.kind === "video" ? (
                          <video
                            className="figure-image"
                            muted
                            playsInline
                            preload="metadata"
                            src={`${image.src}#t=0.1`}
                          />
                        ) : (
                          <Image
                            alt={image.alt}
                            className="figure-image"
                            fill
                            loading={index < 2 ? "eager" : "lazy"}
                            sizes="(min-width: 1024px) 60vw, 100vw"
                            src={image.src}
                          />
                        )}
                        <span aria-hidden="true" className="figure-expand">
                          {image.kind === "video" ? <Play size={15} /> : <Maximize2 size={15} />}
                        </span>
                      </button>

                      {image.caption ? (
                        <p className="figure-caption">{image.caption}</p>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}

      {active ? (
        <div
          aria-label={`${projectTitle} figure viewer`}
          aria-modal="true"
          className="lightbox"
          onClick={close}
          role="dialog"
        >
          <button
            aria-label="Close viewer"
            className="lightbox-close"
            onClick={close}
            ref={closeButtonRef}
            type="button"
          >
            <X size={20} />
          </button>

          {images.length > 1 ? (
            <button
              aria-label="Previous figure"
              className="lightbox-nav lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              type="button"
            >
              <ChevronLeft size={24} />
            </button>
          ) : null}

          {/* Stops a click on the figure itself from closing the viewer. */}
          <figure className="lightbox-stage" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-frame">
              {active.kind === "video" ? (
                /* Keyed on src so stepping between videos remounts the player
                   instead of carrying the previous one's position over. */
                <video
                  autoPlay
                  className="lightbox-image"
                  controls
                  key={active.src}
                  playsInline
                  src={active.src}
                />
              ) : (
                <Image
                  alt={active.alt}
                  className="lightbox-image"
                  height={active.height ?? 1200}
                  priority
                  src={active.src}
                  // Some figures were exported from documents at thumbnail
                  // size. Capping the display width at the intrinsic width
                  // shows them small and sharp rather than large and smeared.
                  style={active.width ? { maxWidth: `${active.width}px` } : undefined}
                  width={active.width ?? 1600}
                />
              )}
            </div>
            <figcaption className="lightbox-caption">
              <span className="lightbox-counter">
                {(openIndex ?? 0) + 1} / {images.length}
              </span>
              <span>{active.caption ?? active.alt}</span>
            </figcaption>
          </figure>

          {images.length > 1 ? (
            <button
              aria-label="Next figure"
              className="lightbox-nav lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              type="button"
            >
              <ChevronRight size={24} />
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

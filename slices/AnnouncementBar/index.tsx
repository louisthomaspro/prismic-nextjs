import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AnnouncementBar`.
 */
export type AnnouncementBarProps =
  SliceComponentProps<Content.AnnouncementBarSlice>;

/**
 * Component for "AnnouncementBar" Slices.
 */
const AnnouncementBar = ({ slice }: AnnouncementBarProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.enable && (
        <div className="flex justify-center items-center bg-orange-600 text-white h-12">
          <PrismicRichText field={slice.primary.title} />
          <PrismicNextLink field={slice.primary.link}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
              {slice.primary.button}
            </button>
          </PrismicNextLink>
        </div>
      )}
    </section>
  );
};

export default AnnouncementBar;

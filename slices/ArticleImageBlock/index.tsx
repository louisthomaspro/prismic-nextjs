import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ArticleImageBlock`.
 */
export type ArticleImageBlockProps =
  SliceComponentProps<Content.ArticleImageBlockSlice>;

/**
 * Component for "ArticleImageBlock" Slices.
 */
const ArticleImageBlock = ({ slice }: ArticleImageBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-black"
    >
      {/* 2 columns */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-80 aspect-[3/2]">
            <PrismicNextImage field={slice.primary.image} />
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col justify-center items-center">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default ArticleImageBlock;

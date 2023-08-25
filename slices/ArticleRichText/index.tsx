import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ArticleRichText`.
 */
export type ArticleRichTextProps =
  SliceComponentProps<Content.ArticleRichTextSlice>;

/**
 * Component for "ArticleRichText" Slices.
 */
const ArticleRichText = ({ slice }: ArticleRichTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-black"
    >
      <PrismicRichText field={slice.primary.text} />
    </section>
  );
};

export default ArticleRichText;

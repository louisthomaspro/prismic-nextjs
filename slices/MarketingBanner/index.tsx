import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MarketingBanner`.
 */
export type MarketingBannerProps =
  SliceComponentProps<Content.MarketingBannerSlice>;

/**
 * Component for "MarketingBanner" Slices.
 */
const MarketingBanner = ({ slice }: MarketingBannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-black"
    >
      {new Date(slice.primary.start_at as string) > new Date() &&
        new Date() < new Date(slice.primary.end_at as string) && (
          <div className="text-black pd-4 relative w-80 aspect-[3/2]">
            <PrismicNextImage
              field={slice.primary.image}
              className="object-cover h-full w-full rounded-md"
            />
            <PrismicNextLink
              field={slice.primary.link}
              className="absolute bottom-2 right-2"
            >
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                {slice.primary.button}
              </button>
            </PrismicNextLink>
          </div>
        )}
    </section>
  );
};

export default MarketingBanner;

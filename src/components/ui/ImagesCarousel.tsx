import {FC, useContext, useMemo, useRef} from 'react';
import {Carousel, Image} from "antd";
import {CarouselRef} from "antd/lib/carousel";
import cl from "styles/ui/ImagesCarousel.module.scss"
import {emptyImage} from "@/constants";
import classNames from "classnames";
import {DeviceTypes} from "types/enums/device-types.tsx";
import {DeviceTypeContext} from "@/context/device-type.ts";

type ChangeCarouselSliceEventHandler = (current: number, prevCurrent: number) => void

interface CarouselProps {
    images?: string[]
    className?: string
}

const ImagesCarousel: FC<CarouselProps> = ({images, className}) => {
    const carouselRef = useRef<CarouselRef>(null);
    const deviceType = useContext(DeviceTypeContext);

        const changeCarouselSlide: ChangeCarouselSliceEventHandler = (value) => {
        carouselRef.current?.goTo(value)
    }

    const isMobileAbove = useMemo(() => deviceType > DeviceTypes.mobile, [deviceType])

    return (
        <div className={className}>
            <Image.PreviewGroup
                items={images}
                preview={{
                    onChange: changeCarouselSlide,
                }}
            >
                <Carousel
                    arrows={isMobileAbove}
                    className={cl.Carousel}
                    ref={carouselRef}
                    dots={isMobileAbove}
                >
                    {images?.length ?
                        images.map((image, index) => (
                            <Image
                                width='100%'
                                key={index}
                                className={cl.Carousel__image}
                                placeholder={"image #" + index}
                                fallback={emptyImage}
                                src={image}
                            />
                        ))
                        :
                        <Image
                            width='100%'
                            className={classNames(cl.Carousel__image, cl.Carousel__image_notFound)}
                            placeholder='image not found'
                            fallback={emptyImage}
                            src={emptyImage}
                        />
                    }
                </Carousel>
            </Image.PreviewGroup>
        </div>);
};

export default ImagesCarousel;
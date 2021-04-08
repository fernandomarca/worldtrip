import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

export function Slider() {
  return (
    <Flex maxWidth={1240} height={450} mb="20" mx="auto">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, type: "bullets" }}
        scrollbar={{ draggable: true }}
        parallax={true}
      >
        {/* Add Arrows Nav */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <SwiperSlide>
          <Link href="/continentes/europe">
            <img src="/europe.svg" alt="europe" />
          </Link>
          <div
            style={{
              position: "absolute",
              top: "180px",
              left: "400px",
              textAlign: "center",
            }}
          >
            <Heading color="gray.50" fontSize="6xl">
              Europa
            </Heading>
            <Text color="gray.50" fontSize="4xl">
              O continente mais antigo.
            </Text>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/america-norte">
            <img src="/american_nort.jpg" alt="american north" />
          </Link>
          <div
            style={{
              position: "absolute",
              top: "180px",
              left: "400px",
              textAlign: "center",
            }}
          >
            <Heading color="gray.50" fontSize="6xl">
              América do Norte
            </Heading>
            <Text color="gray.50" fontSize="4xl">
              As viagens de trem mais bonitas.
            </Text>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/america-sul">
            <img src="/american_south.jpg" alt="american north" />
          </Link>
          <div
            style={{
              position: "absolute",
              top: "180px",
              left: "400px",
              textAlign: "center",
            }}
          >
            <Heading color="gray.800" fontSize="6xl">
              América do Sul
            </Heading>
            <Text color="gray.800" fontSize="4xl" fontWeight="bold">
              As praias mais bonitas.
            </Text>
          </div>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}

<script setup lang="ts">
const supporters = [
    {
        alt: "Bank of America",
        src: "https://cdn.kastatic.org/images/supporters-logos/bank-of-america-dark-gray@2x.png",
        imgClass: "w-[165px] h-[17px] md:w-[204px] md:h-[21.2px] lg:-mt-[11px] -lg:ml-[11px]",
    },
    {
        alt: "College Board",
        src: "https://cdn.kastatic.org/images/supporters-logos/college-board-dark-gray@2x.png",
        imgClass: "w-[152.5px] h-[26px] md:w-[189px] md:h-[32.5px] lg:ml-0",
    },
    {
        alt: "Ann and John Doerr",
        src: "https://cdn.kastatic.org/images/supporters-logos/ann-and-john-doerr-dark-gray@2x.png",
        imgClass: "w-[144px] h-[16px] md:w-[165.5px] md:h-[19px] lg:m-auto",
    },
    {
        alt: "Bill and Melinda Gates Foundation",
        src: "https://cdn.kastatic.org/images/supporters-logos/gates-foundation-dark-gray@2x.png",
        imgClass: "w-[174px] h-[35px] md:w-[215.5px] md:h-[43px] lg:m-auto",
    },
    {
        alt: "Fundação Lemann",
        src: "https://cdn.kastatic.org/images/supporters-logos/lemann-foundation-dark-gray@2x.png",
        imgClass: "w-[122px] h-[39px] md:w-[151px] md:h-[48px] lg:m-auto",
    },
    {
        alt: "Carlos Rodriguez-Pastor",
        src: "https://cdn.kastatic.org/images/supporters-logos/carlos-rodriguez-pastor-dark-gray@2x.png",
        imgClass: "w-[192px] h-[17.5px] md:w-[221px] md:h-[20px] lg:mt-[16px]",
    },
    {
        alt: "Tata Trusts",
        src: "https://cdn.kastatic.org/images/supporters-logos/tata-trusts-dark-gray@2x.png",
        imgClass: "w-[139px] h-[14px] md:w-[172.5px] md:h-[17px] lg:mt-[8px]",
    },
    {
        alt: "Valhalla Charitable Foundation",
        src: "https://cdn.kastatic.org/images/supporters-logos/valhalla-dark-gray@2x.png",
        imgClass: "w-[134px] h-[27.5px] md:w-[155px] md:h-[32px] lg:mt-[36px]",
    },
];
</script>

<template>
    <div class="overflow-hidden flex flex-col relative items-stretch">
        <svg viewBox="0 0 1366 708" height="708"
            class="h-full top-0 bottom-0 absolute overflow-visible self-center min-h-full w-[1600px] lg:w-[110%]"
            preserveAspectRatio="none" aria-hidden="true">
            <path
                d="M193.85 1.356L-18.72 36.724c-43.745 7.279-77.472 42.499-82.849 86.519l-57.734 472.632C-166.583 655.469-120.079 708-60.041 708H1324c55.23 0 100-44.772 100-100V132.617c0-48.4-34.66-89.852-82.3-98.42l-72.92-13.117a99.987 99.987 0 0 0-17.7-1.58H943L693 0H210.262c-5.499 0-10.988.454-16.412 1.356z"
                fill="#F5F5F5"></path>
        </svg>
        <div
            class="pt-[90px] pb-[22px] px-10 md:pt-[109px] md:pb-[42px] md:px-20 lg:pt-[115px] lg:pb-[78px] lg:px-16 w-full flex items-center flex-col relative">
            <h2
                class="text-[22px] leading-[30px] text-center lg:text-[32px] lg:leading-[48px] block font-serif font-semibold text-[#2D444E]">
                Key
                supporters</h2>
            <div
                class="w-auto flex-col mx-auto pt-[58px] max-w-[540px] md:m-0 md:flex-row md:pt-[68px] lg:max-w-[1024px] flex flex-wrap items-center justify-center relative">
                <div v-for="(supporter, i) in supporters" :key="supporter.alt"
                    class="w-full mt-0 mx-0 mb-[58px] basis-auto items-center md:basis-[50%] lg:basis-auto md:w-auto md:mb-[68px] lg:mx-[28px] lg:mb-[32px] text-left shrink-0 relative flex flex-col justify-center"
                    :class="{
                        'md:items-end': i % 2 === 1,
                        'md:items-start': i % 2 === 0,
                    }">
                    <img :class="supporter.imgClass + ' m-0'" :alt="supporter.alt" :src="supporter.src" />
                </div>
            </div>
        </div>
    </div>
</template>
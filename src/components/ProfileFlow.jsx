// "use client";

// import React, { forwardRef, useRef } from "react";

// // import { cn } from "@/lib/utils";
// import { AnimatedBeam } from "@/components/magicui/animated-beam";

// const Circle = forwardRef(
//   ({ className, children }, ref) => (
//     <div
//       ref={ref}
//       className={cn(
//         "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
//         className
//       )}
//     >
//       {children}
//     </div>
//   )
// );

// Circle.displayName = "Circle";

// export function AnimatedBeamMultipleOutputDemo({ className }) {
//   const containerRef = useRef(null);
//   const div1Ref = useRef(null);
//   const div2Ref = useRef(null);
//   const div3Ref = useRef(null);
//   const div4Ref = useRef(null);
//   const div5Ref = useRef(null);
//   const div6Ref = useRef(null);
//   const div7Ref = useRef(null);

//   return (
//     <div
//       className={cn(
//         "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl",
//         className
//       )}
//       ref={containerRef}
//     >
//       <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
//         <div className="flex flex-col justify-center">
//           <Circle ref={div7Ref}>
//             <Icons.user />
//           </Circle>
//         </div>
//         <div className="flex flex-col justify-center">
//           <Circle ref={div6Ref} className="size-16">
//             <Icons.openai />
//           </Circle>
//         </div>
//         <div className="flex flex-col justify-center gap-2">
//           <Circle ref={div1Ref}>
//             <Icons.googleDrive />
//           </Circle>
//           <Circle ref={div2Ref}>
//             <Icons.googleDocs />
//           </Circle>
//           <Circle ref={div3Ref}>
//             <Icons.whatsapp />
//           </Circle>
//           <Circle ref={div4Ref}>
//             <Icons.messenger />
//           </Circle>
//           <Circle ref={div5Ref}>
//             <Icons.notion />
//           </Circle>
//         </div>
//       </div>

//       {/* AnimatedBeams */}
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div1Ref}
//         toRef={div6Ref}
//         duration={3}
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div2Ref}
//         toRef={div6Ref}
//         duration={3}
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div3Ref}
//         toRef={div6Ref}
//         duration={3}
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div4Ref}
//         toRef={div6Ref}
//         duration={3}
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div5Ref}
//         toRef={div6Ref}
//         duration={3}
//       />
//       <AnimatedBeam
//         containerRef={containerRef}
//         fromRef={div6Ref}
//         toRef={div7Ref}
//         duration={3}
//       />
//     </div>
//   );
// }

// const Icons = {
//   notion: () => (
//     <svg
//       width="100"
//       height="100"
//       viewBox="0 0 100 100"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
//         fill="#ffffff"
//       />
//       <path
//         d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
//         fill="#000000"
//         fillRule="evenodd"
//         clipRule="evenodd"
//       />
//     </svg>
//   ),
//   openai: () => (
//     <svg
//       width="100"
//       height="100"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9 6.0462 6.0462 0 0 0-.7427-7.0967zm-2.3509 1.189a4.5245 4.5245 0 0 1-.4172 5.2752 4.4379 4.4379 0 0 1-3.5913 1.7997 4.5232 4.5232 0 0 1-5.2578-4.4191 4.4379 4.4379 0 0 1 1.7997-3.5912 4.5245 4.5245 0 0 1 5.2797-.4175 4.4379 4.4379 0 0 1 1.7877 3.5913zm-6.0244-1.7895a2.5714 2.5714 0 0 1 2.5715-2.5714 2.5714 2.5714 0 0 1 2.5715 2.5714 2.5714 2.5714 0 0 1-2.5715 2.5714 2.5714 2.5714 0 0 1-2.5715-2.5714zm0-1.4707a4.0421 4.0421 0 0 0-4.0422 4.0422 4.0421 4.0421 0 0 0 4.0422 4.0422 4.0421 4.0421 0 0 0 4.0421-4.0422 4.0421 4.0421 0 0 0-4.0421-4.0422z" />
//     </svg>
//   ),
//   googleDrive: () => (
//     <svg
//       width="100"
//       height="100"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M19.072 10.715c-.226-.188-.564-.148-.752.078l-2.596 3.075c-.176.208-.514.252-.754.102l-3.354-2.03c-.239-.146-.544-.038-.64.225l-.646 1.955c-.097.291.073.615.358.74l4.874 2.452c.285.125.622.02.776-.256l2.65-3.585c.154-.208.073-.507-.169-.635zM9.384 5.213L5.51 7.635l4.873 7.382 3.874-2.918-4.873-7.382zm7.455 6.214l-1.462 1.184 3.288 4.593 1.462-1.184-3.288-4.593zm-5.196 3.215l-1.943 1.568c-.177.143-.425.097-.553-.092l-1.68-2.346c-.128-.188-.084-.445.093-.588l1.943-1.568 1.68 2.346c.128.188.084.445-.093.588z" />
//       <path d="M17.38 8.49l-1.106 1.416 2.82 3.938 1.106-1.416-2.82-3.938z" />
//     </svg>
//   ),
//   googleDocs: () => (
//     <svg
//       width="100"
//       height="100"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M15.04 13.44c0 .25-.06.47-.19.68l-3.6 5.6c-.17.27-.4.46-.69.57-.29.11-.6.11-.89 0-.29-.1-.53-.3-.7-.57l-3.6-5.6c-.13-.21-.2-.43-.2-.68 0-.24.07-.45.2-.64l3.65-5.67c.16-.25.4-.43.7-.53.3-.1.61-.1.92 0s.53.28.7.53l3.6 5.6c.12.19.18.4.18.64zM12 4.95l-2.73 4.25H14.7L12 4.95zM6.98 10.8l-2.53 3.95-1.16-1.8L5.82 9 6.98 10.8zm-.97 3.17l-1.2 1.8h5.5l-1.2-1.8h-3.1zM18.53 9.7l-1.2-1.8 1.2-1.8c.19-.29.19-.65 0-.93s-.52-.48-.9-.48H5.35c-.38 0-.72.16-.9.48-.18.27-.18.62 0 .93l1.2 1.8-1.2 1.8c-.19.29-.19.65 0 .93s.52.48.9.48h11.38c.38 0 .72-.16.9-.48.18-.27.18-.62 0-.93z" />
//     </svg>
//   ),
// };
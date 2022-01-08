module.exports = {
   content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#045CC7",
            font: {
               100: "#EFF8F6",
               300: "#535E5C",
               500: "#03221C",
            },
         },
         fontFamily: {
            body: ["Montserrat"],
         },
      },
   },
   plugins: [],
};

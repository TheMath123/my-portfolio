export const umami = {
  track: (props: any) => {
    if (typeof window === "undefined" || !(window as any).umami) return;

    if (typeof props === "function") {
      const modifiedProps = props({});
      (window as any).umami.track(modifiedProps);
    } else {
      (window as any).umami.track(props);
    }
  },

  identify: (props: any) => {
    if (typeof window === "undefined" || !(window as any).umami) return;
    (window as any).umami.identify(props);
  },
};

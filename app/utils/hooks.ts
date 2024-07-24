import { Ionicons } from "@expo/vector-icons";
export enum IconType {
  Ionicon,
}

type interfaceMenu = {
  title: string;
  name: string;
  icon1: {
    value: { type: IconType.Ionicon; name: keyof typeof Ionicons.glyphMap };
  };
  icon2: {
    value: { type: IconType.Ionicon; name: keyof typeof Ionicons.glyphMap };
  };
};

const useHooks = () => {
  const Menus: interfaceMenu[] = [
    {
      title: "Stunting",
      icon1: {
        value: {
          type: IconType.Ionicon,
          name: "fitness",
        },
      },
      icon2: {
        value: {
          type: IconType.Ionicon,
          name: "fitness-outline",
        },
      },
      name: "stunting",
    },
    {
      title: "Nutrition",
      icon1: {
        value: {
          type: IconType.Ionicon,
          name: "accessibility",
        },
      },
      icon2: {
        value: {
          type: IconType.Ionicon,
          name: "accessibility-outline",
        },
      },
      name: "nutrition",
    },
    {
      title: "Education",
      icon1: {
        value: {
          type: IconType.Ionicon,
          name: "newspaper",
        },
      },
      icon2: {
        value: {
          type: IconType.Ionicon,
          name: "newspaper-outline",
        },
      },
      name: "education",
    },
    {
      title: "FAQ",
      icon1: {
        value: {
          type: IconType.Ionicon,
          name: "help-circle",
        },
      },
      icon2: {
        value: {
          type: IconType.Ionicon,
          name: "help-circle-outline",
        },
      },
      name: "faq",
    },
  ];

  const BottomNav: interfaceMenu[] = [
    {
      title: "Home",
      icon1: {
        value: {
          type: IconType.Ionicon,
          name: "storefront",
        },
      },
      icon2: {
        value: {
          type: IconType.Ionicon,
          name: "storefront-outline",
        },
      },
      name: "index",
    },
    {
      title: "Stunting",
      icon1: {
        value: {
          type: IconType.Ionicon,
          name: "fitness",
        },
      },
      icon2: {
        value: {
          type: IconType.Ionicon,
          name: "fitness-outline",
        },
      },
      name: "stunting",
    },
    {
      title: "Nutrition",
      icon1: {
        value: {
          type: IconType.Ionicon,
          name: "accessibility",
        },
      },
      icon2: {
        value: {
          type: IconType.Ionicon,
          name: "accessibility-outline",
        },
      },
      name: "nutrition",
    },
    {
      title: "Education",
      icon1: {
        value: {
          type: IconType.Ionicon,
          name: "newspaper",
        },
      },
      icon2: {
        value: {
          type: IconType.Ionicon,
          name: "newspaper-outline",
        },
      },
      name: "education",
    },
  ];

  return {
    datas: {
      Menus,
      BottomNav,
    },
    methods: {},
  };
};

export default useHooks;

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
  color: string;
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
      color: "#3AA0F7",
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
      color: "#F5D399",
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
      color: "#899F9C",
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
      color: "#B3C680",
    },
  ];

  const BottomNav: interfaceMenu[] = [
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
      color: "#3AA0F7",
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
      color: "#F5D399",
    },
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
      color: "#0a7ea4",
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
      color: "#899F9C",
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
      color: "#B3C680",
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

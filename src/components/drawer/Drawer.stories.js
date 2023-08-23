// import MyButton from './Button.vue';
import DdDrawer from "./index.vue";
import DdButton from "../buttons/index.vue";
import { action } from "@storybook/addon-actions";
import { ref } from "vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Molecules/Drawer",
  component: DdDrawer,
};

export const Default = {
  render: (args) => ({
    components: {
      DdDrawer,
      DdButton
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const show = ref(false);
      const cancel = () => {
        show.value = false;
      }
      const close = () => {
        show.value = false;
      }
      const OpenDrawer = () => {
        show.value = true;
      };
      return { args, show, onClickMethod, OpenDrawer, cancel, close };
    },
    template: `<dd-button title="Default Drawer" content="textOnly" type="secondary" @click="OpenDrawer"/>
    <dd-drawer @close="onClickMethod" v-model="show" title="Header" size="30" v-bind="args" @cancel="cancel" @close="close" />`,
  }),
  argTypes: {
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    saveTitle: {
      description: "You change the title of footer save button",
      table: {
        defaultValue: {
          summary: "Save",
        },
      },
    },
    closeTitle: {
      description: "You change the title of footer close button",
      table: {
        defaultValue: {
          summary: "Close",
        },
      },
    },
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    size: {
      description:
        "Change the width of the drawer with your required unints for example  400px ,50% , 50em and etc and defaults value is 30% ",
      table: {
        defaultValue: {
          summary: "30%",
        },
      },
    },
    position: {
      description: "You change the position of drawer left / right",
      table: {
        defaultValue: {
          summary: "right",
        },
      },
    },
    footer: {
      type: "boolean",
      description: "To show footer pass footer prop",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    primaryHeader: {
      type: "boolean",
      description: "To show header as primary with description",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

export const PrimaryHeader = {
  render: (args) => ({
    components: {
      DdDrawer,
      DdButton
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const show = ref(false);
      const cancel = () => {
        show.value = false;
      }
      const close = () => {
        show.value = false;
      }
      const OpenDrawer = () => {
        show.value = true;
      };
      return { args, show, onClickMethod, OpenDrawer, cancel, close };
    },
    template: `<dd-button title="primary Header" content="textOnly" type="secondary" @click="OpenDrawer"/>
    <dd-drawer @close="onClickMethod" v-model="show" title="Header" size="30" primaryHeader="true" footer="false" v-bind="args" @close="close" @cancel="cancel" />`,
  }),
  argTypes: {
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    saveTitle: {
      description: "You change the title of footer save button",
      table: {
        defaultValue: {
          summary: "Save",
        },
      },
    },
    closeTitle: {
      description: "You change the title of footer close button",
      table: {
        defaultValue: {
          summary: "Close",
        },
      },
    },
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    header: {
      description: "If you want header less Drawer you can set prop false",
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    zIndex: {
      description: "If you want to change the Z-index value you use this prop",
      table: {
        defaultValue: {
          summary: 50,
        },
      },
    },
    size: {
      description:
        "Change the width of the drawer with your required unints for example  400px ,50% , 50em and etc and defaults value is 30% ",
      table: {
        defaultValue: {
          summary: "30%",
        },
      },
    },
    position: {
      description: "You change the position of drawer left / right",
      table: {
        defaultValue: {
          summary: "right",
        },
      },
    },
    footer: {
      type: "boolean",
      description: "To show footer pass footer prop",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    primaryHeader: {
      type: "boolean",
      description: "To show header as primary with description",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

export const LeftDrawer = {
  render: (args) => ({
    components: {
      DdDrawer,
      DdButton
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const show = ref(false);
      const cancel = () => {
        show.value = false;
      }
      const close = () => {
        show.value = false;
      }
      const OpenDrawer = () => {
        show.value = true;
      };
      return { args, show, onClickMethod, OpenDrawer, cancel, close };
    },
    template: `<dd-button title="Left Drawer" content="textOnly" type="secondary" @click="OpenDrawer"/>
    <dd-drawer @close="onClickMethod" v-model="show" title="Header" size="30" primaryHeader="true" footer="true" position="left" v-bind="args" @cancel="cancel" @close="close" />`,
  }),
  argTypes: {
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    saveTitle: {
      description: "You change the title of footer save button",
      table: {
        defaultValue: {
          summary: "Save",
        },
      },
    },
    closeTitle: {
      description: "You change the title of footer close button",
      table: {
        defaultValue: {
          summary: "Close",
        },
      },
    },
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    size: {
      description:
        "Change the width of the drawer with your required unints for example  400px ,50% , 50em and etc and defaults value is 30% ",
      table: {
        defaultValue: {
          summary: "30%",
        },
      },
    },
    position: {
      description: "You change the position of drawer left / right",
      table: {
        defaultValue: {
          summary: "right",
        },
      },
    },
    footer: {
      type: "boolean",
      description: "To show footer pass footer prop",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    primaryHeader: {
      type: "boolean",
      description: "To show header as primary with description",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

export const Footer = {
  render: (args) => ({
    components: {
      DdDrawer,
      DdButton
    },
    setup() {
      const onClickMethod = () => action("clicked");
      const show = ref(false);
      const cancel = () => {
        show.value = false;
      }
      const close = () => {
        show.value = false;
      }
      const OpenDrawer = () => {
        show.value = true;
      };
      return { args, show, onClickMethod, OpenDrawer, cancel, close };
    },
    template: `<dd-button title="Footer Drawer" content="textOnly" type="secondary" @click="OpenDrawer"/>
    <dd-drawer @close="onClickMethod" v-model="show" title="Header" footer="true" size="40" v-bind="args" @cancel="cancel" @close="close" />`,
  }),
  argTypes: {
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    saveTitle: {
      description: "You change the title of footer save button",
      table: {
        defaultValue: {
          summary: "Save",
        },
      },
    },
    closeTitle: {
      description: "You change the title of footer close button",
      table: {
        defaultValue: {
          summary: "Close",
        },
      },
    },
    title: {
      description: "Change header title value as per the requirement",
      table: {
        defaultValue: {
          summary: "Button",
        },
      },
    },
    size: {
      description:
        "Change the width of the drawer with your required unints for example  400px ,50% , 50em and etc and defaults value is 30% ",
      table: {
        defaultValue: {
          summary: "30%",
        },
      },
    },
    position: {
      description: "You change the position of drawer left / right",
      table: {
        defaultValue: {
          summary: "right",
        },
      },
    },
    footer: {
      type: "boolean",
      description: "To show footer pass footer prop",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    primaryHeader: {
      type: "boolean",
      description: "To show header as primary with description",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

Default.parameters = {
  docs: {
    source: {
      code: `<dd-drawer @close="onClickMethod" v-model="show" title="Header" size="30" />`,
    },
  },
};

PrimaryHeader.parameters = {
  docs: {
    source: {
      code: `<dd-drawer @close="onClickMethod" v-model="show" title="Header" size="30" primaryHeader="true" footer="false" />`,
    },
  },
};

LeftDrawer.parameters = {
  docs: {
    source: {
      code: `<dd-drawer @close="onClickMethod" v-model="show" title="Header" size="30" primaryHeader="true" footer position="left" />`,
    },
  },
};

LeftDrawer.parameters = {
  docs: {
    source: {
      code: `<dd-drawer @close="onClickMethod" v-model="show" title="Header" footer size="40" />`,
    },
  },
};

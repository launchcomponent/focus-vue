<script lang="ts">

import { defineComponent, h, resolveComponent } from 'vue';


export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const items = props.items.map((item) => {
      const className = 'block px-3 py-2 hover:bg-gray-200';

      if (item.to) {
        const component = resolveComponent('router-link');

        return h(component, {
          className,
          to: { name: 'assets' },
        }, () => h('span', item.content));
      }

      return h('div', {
        className,
        onClick: item.onAction ? item.onAction : null,
      }, item.content);
    });

    return () => (
      h('div', null, items)
    );
  },
});

</script>

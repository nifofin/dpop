import component3 from '../components/c3.js'

export default {
    name: 'Resources',
    components: {component3},

    setup() {
        const title = 'Resources'
        return {title}
    },

    template: `
        <div>
            <h1>{{ title }}</h1>
            <component3></component3>
        </div>
    `,
  };

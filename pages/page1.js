import component1 from '../components/c1.js'

export default {
    name: 'Course Materials',
    components: {component1},

    setup() {
        const title = 'Course Materials'
        return {title}
    },

    template: `
        <div>
            <h1>{{ title }}</h1>
            <component1></component1>
        </div>
    `,
};

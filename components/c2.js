import store from '../store.js'

export default {
    name: 'Students',
    setup() {
        return {store};
    },
    template: `
        <div>
            <h3 class="gray">Surveys</h3>
            <p><a href="https://forms.gle/hdJN6a8Xkik6x7T5A">Student survey</a></p>
            <p><a href="https://forms.gle/jFeL1pWxGjfmBuaq8">Parent survey</a></p>

            <p><a href="https://forms.gle/kjt4yKni6MnRrgt8A">Topic (for future lessons) suggestions survey</a></p>

            <p><a href="https://forms.gle/yAZ3wT3ZuUKiRu2r9">Artwork submission survey</a>—for if you want your artwork to be displayed on this site (below).</p>

            <h3 class="gray">Gallery</h3>
            <p>N/A</p>
        </div>
    `,
};

//
//
// export default {
//     name: 'Two',
//
//     props: {
//         message: String,
//     },
//
//     setup(props) {
//         const {onMounted} = Vue;
//
//         onMounted(() => {
//             if (props.message) store.message = props.message;
//         })
//
//         return {store};
//     },
//
//
//     template: `
//         <h1>Component Two</h1>
//         <div>
//             <input v-model="store.message" placeholder="Write something">
//             <p><small>...or add <strong><a href="?msg=something">msg parameter</a></strong> to url</small></p>
//             <h4 v-if="store.message">You wrote: {{ store.message }}</h4>
//         </div>
//     `,
// };

import component2 from '../components/c2.js'
import functions from '../functions.js'

export default {
    name: 'Students',
    components: {component2},

    setup() {
        const title = 'Students';
        return {title};
    },

    template: `
        <div>
            <h1>{{title}}</h1>
            <component2></component2>
        </div>
    `
}


// export default {
//     name: 'Page2',
//     components: {component2},
//
//     setup() {
//         const title = 'Page Two'
//
//         //get url parameter 'msg' (for example: /page2?msg=something)
//         const msg = functions.getUrlParam('msg');
//
//         return {title, msg}
//     },
//
//     template: `
//         <div>
//             {{ title }}
//             <component2 :message="msg"></component2>
//         </div>
//     `,
//   };

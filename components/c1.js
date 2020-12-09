import store from '../store.js'

export default {
    name: 'One',

    setup() {
        return {store};
    },

    template: `
      <div>
        <h3 class="gray">Class description</h3>

        <p>People are amongst the most difficult subjects to draw—however, they are far from impossible. This class is geared towards those with a solid foundation in art and looking to improve their photorealism, with an emphasis on cultivating proper technique and habits. If the average level of the class is sufficiently advanced enough, weekly homework should be expected. Each week will focus on a certain aspect (or multiple weeks will focus on one if the selected topic is complex), and the class will culminate in a 4-week long final project. </p>

        <p>*Note: As this is the first time this class has been launched, without any prior runs, forgive us for any inconsistencies/inaccuracies/unexpected pacing.</p>

        <h3 class="gray">Syllabus</h3>
        <p>*Subject to change</p>
        <ul>
            <li><b>Week 1</b> - Introductions, icebreakers, course overview, quick choice project</li>
            <li><b>Week 2</b></li>
            <li><b>Week 3</b></li>
            <li><b>Week 4</b></li>
            <li><b>Week 5</b></li>
            <li><b>Week 6</b></li>
            <li><b>Week 7</b></li>
            <li><b>Week 8</b></li>
            <li><b>Week 9</b></li>
            <li><b>Week 10</b></li>
            <li><b>Week 11</b></li>
            <li><b>Week 12</b></li>
        </ul>


        <h3 class="gray">Slides</h3>
      </div>
    `,
};

// <button v-on:click="store.$counter++">You clicked me {{ store.$counter }} times.</button><br>
// <br>
// <a href="javascript:void(0);" v-on:click="store.$counter = 0">Reset</a>

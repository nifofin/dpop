
export default {
    name: 'Home',

    setup() {
        const title = 'People in Portraits'
        return {title}
    },

    template: `
        <div>
            <h1>{{ title }}</h1>
            <h3 class="gray">6PM-7PM Friday, 12/11/2020 - 3/19/2021</h3>
            <h4 class="gray">Victoria Li</h4>

            <p>Hi! This is the unofficial-official homepage of the 'People in Portraits' art class that runs from 6PM to 7PM (with occasional fluctuations due to the instructor's schedule) weekly on Fridays, starting on the 11th of December, 2020, and ending on the 19th of March, 2021.</p>

            <p>Check out the main site of our organization, <a target="_blank" href="https://dabbleyoutharts.wixsite.com/home/">Dabble</a>.</p>

            <p>Take a look at the other pages on this site for class information!</p>

            <p>Btw, announcements will be displayed like so (at the top of the page):</p>
            <div style="background-color: #FFFDDE; height:30px; border:thin solid #EDDD00">
                <div style="text-align: center">Next class is on <b>December 11th, 2020</b> from <b>6-7PM</b></div>
            </div>
        </div>
    `,
  };

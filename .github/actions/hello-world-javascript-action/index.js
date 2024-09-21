const core = require('@actions/core');

try {
    // Get the input from the workflow
    const whoToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${whoToGreet}!`);
    
    // Set the output
    const time = new Date().toISOString();
    core.setOutput('time', time);
} catch (error) {
    core.setFailed(error.message);
}


/*
/
- Desktop
- Documents
- Downloads
- Music
- Pictures
- Public
- Videos
*/

var audio;

const INITIAL_PATH = "/home/aleff";
actual_path = INITIAL_PATH;
const FILES = {
    "/home/aleff": ["Desktop", "Documents", "Downloads", "Music", "Pictures", "Public", "Video"],
    "/home/aleff/Desktop": [""],
    "/home/aleff/Documents": [""],
    "/home/aleff/Downloads": [""],
    "/home/aleff/Music": ["Tenacious_D_Tribute.mp3"],
    "/home/aleff/Pictures": [""],
    "/home/aleff/Public": [""],
    "/home/aleff/Video": ["Tenacious_D_Tribute.mp4"]
};

function sec_check(path){
    if(path == undefined){
        path = "";
    }
    const STANDARD_PATH_REGEX = /^[a-zA-Z0-9\.\/_]{0,50}$/g
    if(path.length > 50){
        return false;
    }
    return path.match(STANDARD_PATH_REGEX);
}

function get_image(url) {
    return new Promise(function(resolve, reject) {
        const img = $('<img src="' + url + '"/>');
        img.on('load', () => resolve(img));
        img.on('error', reject);
    });
}$('body').terminal({
    ls: function(path) {
        if(path == "" || path == undefined){
            path = actual_path;
        }
        toPrint = "";
        FILES[`${path}`].forEach(element => {
            toPrint += element + "\n";
        });
        return toPrint;
    },
    pwd: function() {
        return actual_path;
    },
    cd: function(path) {
        // . .. full_path partial_path
        if(!sec_check(path)){
            return `No such file or directory`;
        }
        if (path == "" || path == undefined){
            actual_path = INITIAL_PATH;
        } else if (path == "."){
            return "";
        } else if (path == ".."){
            if(actual_path == INITIAL_PATH){
                return "Can't come back more, for now...";
            }
            actual_path = actual_path.replace(actual_path.substring(actual_path.lastIndexOf("/")), "");
            return actual_path;
        }
        exist = false
        FILES[`${actual_path}`].forEach(element => {
            if(element == path){
                actual_path += "/"+path;
                exist = true;
                return false;
            }
        });
        if(!exist){
            return "No such file or directory";
        }
        return "";
    },
    play: function(file) {
        if(!sec_check(file) || (file == "" || file == undefined)){
            return `play FAIL formats: can't open input file: No such file or directory`;
        }
        FILES[`${actual_path}`].forEach(element => {
            if(element == file){
                audio = new Audio(`assets/song/${file}`);
                audio.play();
                return false;
            }
        });
    },
    mpv: function(file) {
        if(!sec_check(file) || (file == "" || file == undefined)){
            return `Failed to open the file`;
        }
        FILES[`${actual_path}`].forEach(element => {
            if(element == file){
                video_source = `<video autoplay controls>\
                                    <source src="assets/video/${file}" type="video/mp4">\
                                </video>`;
                this.echo($(video_source));
                return false;
            }
        });
    },
    help: function() {
        return "ls                      List of all file present in the path you are.\n\
pwd                     Print the name of the current working directory.\n\
cd                      Move yourself in the local directories.\n\
	- cd ..             Move yourself back of one directory\n\
    - cd <directory>    Move yourself to <name> directory\n\
play <file.mp3>         Play a song file (with mp3 extension) present in your local files\n\
mpv <file.mp4>          Play a video file (with mp4 extension) present in your local files\n\
help                    To see this content :-)";
    },
    new_command_here: function(param1, param2) {
        if(!sec_check(param1) || (param1 == "" || param1 == undefined)){
            return `you can do all security check needed`;
        }
        if(param1 != param2){
            return "you can use the parameter";
        } else {
            this.echo("print something in output");
        }

        if(param1 == "photo"){
            this.echo("You can return an HTML image tag for see an image");
            img_source = "";
            this.echo($(img_source));
        } else if (param1 == "video"){
            this.echo("or a video");
            video_source = `<video autoplay controls>\
                                    <source src="assets/video/<video_name>.mp4" type="video/mp4">\
                                </video>`;
            this.echo($(video_source));
        } else if (param1 == "song"){
            this.echo("or run a song");
            audio_source = new Audio(`assets/song/<song_name>.mp4`);
            audio_source.play();
        } else {
            this.echo("implement new fetures");
        }

        return ":-)";
    }
},
{
    checkArity: false,
    greetings: 'Welcome to aleff-terminal :-)\nTry to write and send help command to see what you can do\n'
});

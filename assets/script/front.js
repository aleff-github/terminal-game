
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
    }
}, {
    checkArity: false,
    greetings: 'My First JavaScript Terminal\n'
});

# terminal-story
Working on a website terminal based

# Hack the terminal-game
Do you want to hack this terminal-game?

Oh thanks bro, you can follow this few rules to understand how can you hack it.

## What?
You can implement all linux commune command or you can implement one new command that you thing that can be usefull for the game.
For example you can implement a command like pwd (is already been implemented) that return the actual path where are you.

![]()

## Where
You should open the file *assets/scrypt/**front.js*** and then go to the end of file where you see the variable named *new_command_here*.
1. Insert a new line between the *},* that will end the previous command and the name *new_command_here* that will start a new command.
2. here you can write your new command that you want to implement like, idk... find (?)... and write there the following code lines using N param like param1, param2, paramN inside the function parameters.
    ```
    find: function(paramN) {
        // write here you algorithm
    }
    ```
3. Then you can put all you want that the find command should to do, like an algorithm of search for find command.


## How?
If you don't know how do what you want to do, you can follow the function of *new_command_here* command that you will find at the end of the file, however i'll report it here.
If you try to read the code you can understand how to get parameters, how to do some check with the if..else statement, how to response with an image or a video etc.. .
```
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
```

**An another important thing that must be considered is** that the directories is managed by a key-value object named FILES and it is const.
In teory you should to add some file in the FILES paths but opportunally you should put in the correct path of the repository what you want to add.
**For example** if you want to add, idk a txt file named hello.txt, you should push the fisical file into the repository path *assets/document/hello.txt*. If you want that this file can be seen by the terminal-game users in the terminal-game path */home/aleff/Documents* you should add the name *hello.txt* into the file list in that path on the js object FILES, so you will see something like the following:
```
const FILES = {
    // else rows ...
    "/home/aleff/Documents": ["hello.txt"],
    // else rows ...
};
```
and only then, when you will move in the path */home/aleff/Documents*, you will see the file.
How to read or edit it should be implemented by you as i wrote before.

## Who?
Anyone who wants to hack it :-)
If you haven't computer science competence you can advise some new features that can be considered to be implemented, like CTF or some simpatic things like the Tenacious D song on Song directory LOL.

## When?
Whenever you want to do something, if you want to do something. :-)

Good Hacking to everybody :-)
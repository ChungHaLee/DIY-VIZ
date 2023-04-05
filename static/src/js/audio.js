import { PitchDetector } from "pitchy";
import FrequencyMap from "note-frequency-map";

let file, audio;
var audio_context;
var myNote, octave;

let analyser, src, bufferLength, dataArray;
let chroma, maxChroma, energy, amplitudeSpectrum;


let filepath = document.getElementById("filepath")

// LOAD MUSIC (vizInit)

function FileInit() {

    file = document.getElementById("thefile");
    audio = document.getElementById("audio");
    audio_context = audio_context || new AudioContext();
    //filepath.innerHTML = audio.src

  }



function FileChange(){

    file.onchange = function(){

        audio_context.resume();
        audio.load(); //load the new source

        let files = this.files;

        audio.src = URL.createObjectURL(files[0]);

        
        if (!src) {
            src = audio_context.createMediaElementSource(audio);
            analyser = audio_context.createAnalyser();
            src.connect(analyser);
            analyser.connect(audio_context.destination);
        }
        console.log(src)

        AnalyzerPlay(audio_context, src);
        //filepath.innerHTML = audio.src
    }

}



function updatePitch(analyser, detector, input, sampleRate) {
    analyser.getFloatTimeDomainData(input);
    let [pitch, clarity] = detector.findPitch(input, sampleRate);
    myNote = FrequencyMap.noteFromFreq(pitch);
    octave = myNote.octave
}





function pitchDetector(){
    const detector = PitchDetector.forFloat32Array(analyser.fftSize);
    const input = new Float32Array(detector.inputLength);
    updatePitch(analyser, detector, input, audio_context.sampleRate);

}





function AnalyzerPlay(audio_context, src) {

    analyser = audio_context.createAnalyser();
    src.connect(analyser);
    analyser.connect(audio_context.destination);
    analyser.fftSize = 512;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    // energy = 0;


    const meyda_analyser = Meyda.createMeydaAnalyzer({

        audioContext: audio_context,
        source: src,
        buffersize: 1024,
        featureExtractors: ["energy"],
        callback: (features) => {
            energy = features['energy']
            energy = energy * 10

            //console.log('energy:', energy);
        }
    })
    meyda_analyser.start();
}



FileInit();
FileChange();




export { audio, audio_context, src, analyser, energy, bufferLength, dataArray, FileChange, updatePitch, pitchDetector, myNote, octave  }
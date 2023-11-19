// New Media Player Interface
interface NewMediaPlayer {
    play(fileType: string, fileName: string): void
}

// Legacy audio player
class LegacyAudioPlayer {
    playAudio(fileName: string): void {
        console.log(`playing audio file ${fileName}`)
    }
}

// Adapter
class AudioPlayerAdapter {
    private legacyAudioPlayer: LegacyAudioPlayer

    constructor(legacyAudioPlayer: LegacyAudioPlayer) {
        this.legacyAudioPlayer = legacyAudioPlayer
    }

    play(fileType: string, fileName: string) {
        if (fileType == 'audio') {
            this.legacyAudioPlayer.playAudio(fileName)
        } else {
            console.log(`file type ${fileType} not suppported`)
        }
    }
}

// Usage
const legacyAudioPlayer = new LegacyAudioPlayer()
const player = new AudioPlayerAdapter(legacyAudioPlayer)
player.play('audio', 'song.mp3')

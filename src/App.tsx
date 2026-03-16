/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Battery, AlignLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

// 🎵 여기에 원하는 노래들을 미리 세팅하세요!
// audio와 cover에는 인터넷에 올라가 있는 파일의 URL 주소를 넣으시면 됩니다.
const SONGS = [
  {
    id: 1,
    title: "August Fools",
    artist: "August Fools",
    album: "August Is For Fools",
    cover: "https://i.postimg.cc/nrxFYks3/jemog-eul-iblyeoghaseyo-(9).png",
    audio: "https://cdn1.suno.ai/c950c5c4-c5f1-4a4e-befc-4529569f2e17.mp3",
    lyrics: `[Verse 1]
Sweat rings on my t-shirt
(티셔츠엔 땀자국이 번지고)
Melted ice in my glass
(컵 속의 얼음은 다 녹아버렸네)
Neighbors talking through thin walls
(옆집 사람들은 얇은 벽 너머로 떠들고)
Counting all of my past
(내 과거를 하나하나 세고 있지)
You say I'm acting different
(넌 내가 변했다고 말해)
Like I owe you the truth
(근데 내가 왜 너한테 설명해야 해?)
But it’s August Fools again
(우리는 August Fools)
And I’m done proving to you
(이제 증명하는 건 끝이야)

[Chorus]
August Fools
(August Fools)
Too hot to play it cool
(쿨한 척 넘기기엔 너무 뜨겁거든)
You can think what you want
(생각하고 싶은 대로 생각해)
I’m not your headline Not your news
(난 네 가십거리도, 뉴스거리도 아니니까)
August Fools
(August Fools)
I’m not part of your rules
(네 규칙 같은 건 나랑 상관없어)
Keep my name out your mouth
(내 이름 입에 올리지 마)
Mind your own business
(네 인생이나 신경 써)

[Verse 2]
Sun stuck to the window
(창문엔 뜨거운 햇볕이 달라붙어 있고)
Fan clicks Still it spins
(선풍기는 덜컥거리면서도 계속 돌아가)
You keep scrolling my shadows
(내 그림자들을 뒤지고 다니면서)
Trying to live through my sins
(내 잘못들로 대리 만족하는 너)
You swear you really love me
(날 정말 사랑한다고 하지만)
But you love being right
(넌 그냥 네 말이 맞길 바랄 뿐)
You just want a front row seat
(넌 그냥 내 인생 망가지는 꼴을)
To every mess in my life
(무대의 1열에서 보고 싶은 것뿐이잖아)

[Chorus]
August Fools
(August Fools)
Too hot to play it cool
(쿨한 척 넘기기엔 너무 뜨겁거든)
You can think what you want
(생각하고 싶은 대로 생각해)
I’m not your headline Not your news
(난 네 가십거리도, 뉴스거리도 아니니까)
August Fools
(August Fools)
I’m not part of your rules
(네 규칙 같은 건 나랑 상관없어)
Keep my name out your mouth
(내 이름 입에 올리지 마)
Mind your own business
(네 인생이나 신경 써)

[Bridge]
Talk all day till your tongue turns dry
(하루 종일 떠들어대, 혀가 바싹 마를 때까지)
I sleep fine You choke on your pride
(난 잘 자고 있을 테니, 넌 네 자존심에 목이나 메어봐)
If it don’t pay my rent
(내 월세를 내주는 것도 아니고)
If it don’t hold my hand
(내 손을 잡아주는 것도 아니라면)
It don’t get space In my head
(내 머릿속에 머물 자격 없어)

[Chorus]
August Fools
(August Fools)
Too hot to play it cool
(쿨한 척 넘기기엔 너무 뜨겁거든)
You can think what you want
(생각하고 싶은 대로 생각해)
I’m not your headline Not your news
(난 네 가십거리도, 뉴스거리도 아니니까)
August Fools
(August Fools)
Write me off That’s cute
(나를 멋대로 정의해 봐, 그것 참 귀엽네)
Keep your gossip in the heat
(그 헛소리들은 뜨거운 열기 속에 다 녹여버려)
Mind your own business
(제발 너나 잘해)`
  },
  {
    id: 2,
    title: "Love & Hate",
    artist: "August Fools",
    album: "August Is For Fools",
    cover: "https://i.postimg.cc/nrxFYks3/jemog-eul-iblyeoghaseyo-(9).png",
    audio: "https://cdn1.suno.ai/4a8eac4a-513c-48c4-b310-da15b4727988.mp3",
    lyrics: `[Verse 1]
You call me up Hang up 
(전화를 걸고 바로 끊는 너)
Then text "I miss you"
(그리고는 ‘보고 싶다’고 문자를 보내)
I say I’m fine
(난 괜찮다고 말하면서도)
Then type "I can’t resist you"
(‘너를 원한다’고 답장을 하지)
We spin in circles
(우린 계속 제자리를 맴돌아)
Same fight Same excuse
(똑같은 싸움, 똑같은 변명)
I’m tired of choosing
(이젠 선택도 지긋지긋해)
I’m tired of choosing
(네가 너무 지긋지긋해)

[Pre-Chorus] 
One minute you’re sweet like Sunday 
(일요일처럼 달콤하다가도)
Next second you slam the door 
(다음 순간 너는 문을 닫고 나가버려)
Why do I keep running back 
(그런데 난 왜 네게 돌아가는 걸까)
Back for more 
(더 많은 걸 바라면서 너에게로)
Back for more (oh) 
(바보처럼 너에게로)

[Chorus] 
I love you I hate you 
(널 사랑해)
Both at the same time 
(그리고 널 미워해)
You’re the best mistake I can’t get off my mind 
(넌 내 인생 최고의 실수야)
You break me 
(넌 날 무너뜨리다가도)
You save me 
(나를 구원해)
Every kiss Every crime 
(모든 입맞춤, 모든 다툼들)
I love you I hate you 
(널 사랑하지만 널 미워해)
But I can’t quit this ride 
(그치만 이 관계를 멈출 수는 없어)

[Verse 2] 
You wear my hoodie 
(내 후드티를 입고 있으면서)
Then say you might not need me 
(넌 내가 필요 없다고 말해)
You press your forehead to mine 
(넌 내 이마에 이마를 맞대며)
Say "don’t believe me" 
(‘나를 믿지마’라고 속삭여)
We’re on the edge and we like how high it feels 
(우린 벼랑 끝에 서 있지만, 이 아찔한 높이를 즐겨)
We’re scared to jump 
(뛰어내리기는 두렵지만)
But we live for the thrill 
(이 아찔함이 날 살아가게 해)

[Pre-Chorus] 
One minute you’re lost
(방황하는 것 같다가도)
Then laughing
(어느새 웃고 있는 너)
Head on my chest like home
(집에 온 것처럼 내 품에 기대면)
Why do I keep holding on
(난 널 놓지 못해)
When I should let you go (let you go)
(널 놓아줘야 한다는 걸 알면서도)

[Chorus] 
I love you I hate you 
(널 사랑해)
Both at the same time 
(그리고 널 미워해)
You’re the best mistake I can’t get off my mind 
(넌 내 인생 최고의 실수야)
You break me 
(넌 날 무너뜨리다가도)
You save me 
(나를 구원해)
Every kiss Every crime 
(모든 입맞춤, 모든 다툼들)
I love you I hate you 
(널 사랑하지만 널 미워해)
But I can’t quit this ride 
(그치만 이 관계를 멈출 수는 없어) 

[Bridge] 
Tell me do you feel it too
(말해 줘 너도 똑같이 느끼고 있는지)
This push This pull
(서로 밀고 당기는 이 기분을)
This ‘me and you’
(우리 사이의 이 묘한 기류를)
If crazy is the price for us
(미쳐야만 우리가 우리가 될 수 있다면)
Then I’ll be crazy
(난 기꺼이 미칠게)
Crazy in love (oh yeah)
(이미 너에게 미쳐버렸으니까)

[Chorus] 
I love you I hate you 
(널 사랑해)
Both at the same time 
(그리고 널 미워해)
You’re the perfect mess I want for all my life
(넌 평생 내 곁에 두고 싶은 엉망진창이야)
You break me 
(넌 날 무너뜨리다가도)
You save me 
(나를 구원해)
Every wrong feels so right
(모든 잘못된 것들이 정답처럼 느껴져)
I love you I hate you
(널 사랑하면서도 증오해)
Guess we’re worth the fight
(이 모든 걸 견딜 만큼 널 사랑해)`
  },
  {
    id: 3,
    title: "Moonstruck",
    artist: "Agust Fools",
    album: "August Is For Fools",
    cover: "https://i.postimg.cc/nrxFYks3/jemog-eul-iblyeoghaseyo-(9).png",
    audio: "https://cdn1.suno.ai/76a1dc2c-3ddb-4994-80ec-3bd409f13ae8.mp3",
    lyrics: `[Verse 1]
Met you by the busted street sign
(부서진 도로 표지판 옆에서 너를 만났지)
Black boots, Chipped red paint on your name
(검은 부츠, 네 이름 위로 벗겨진 붉은 페인트)
You laughed like you were starting a fire
(불을 지르려는 듯 웃던 너)
I knew I wouldn’t walk out the same
(그 순간 깨달았지, 예전의 나로 돌아갈 수 없겠다는 걸)

[Pre-Chorus]
I say I’m fine
(난 괜찮다고 말하면서도)
Then forget what I’m saying
(내가 무슨 말을 하려 했는지 잊어버려)
You roll your eyes
(넌 눈을 흘기지만)
But you’re kinda still staying
(여전히 내 곁에 있잖아)
If this is wrong
(만약 이게 잘못된 거라면)
I don’t wanna be right
(난 차라리 틀린 채로 살래)
You’re turning every feeling up high
(넌 내 감정을 미치게 끌어올려)

[Chorus]
I’m moonstruck
(난 홀려버렸어)
Knocked out
(정신을 잃고)
Can’t get up
(일어날 수가 없어)
You hit my heart like a midnight truck
(넌 한밤중의 트럭처럼 내 심장을 들이받았어)
Spinning in your orbit
(네 궤도를 맴돌며)
Crashing through my luck
(내 운명 속으로 돌진하고 있어)
I’m moonstruck, moonstruck
(난 너에게 완전 홀려버렸어)
And I don’t wanna wake up
(그리고 이 꿈에서 깨고 싶지 않아)

[Verse 2]
Cigarettes drawn like silver halos
(담배 연기는 은빛 후광처럼 흩어지고)
You swear you’re done making bad bets
(나쁜 내기는 이제 끝이라 맹세하지만)
But you’re tracing constellations on my jacket
(내 재킷 위에 별자리를 그려 나가고 있잖아)
Saying “Promise me you won’t forget”
(내게 "잊지 않겠다고 약속해 줘" 라고 말하며)

[Pre-Chorus]
Your neon eyes got me breaking my plans
(네 네온사인 같은 눈빛에 내 계획은 전부 엉망이 돼)
You pull me close like you’re stealing my hands
(내 손을 뺏어가듯 넌 나를 가까이 끌어당겨)
If this is wrong
(만약 이게 잘못된 거라면)
I don’t wanna be right
(난 차라리 틀린 채로 살래)
You’re cutting every exit tonight
(네가 나의 탈출구를 전부 끊어버렸으니까)

[Chorus]
I’m moonstruck
(난 홀려버렸어)
Knocked out
(정신을 잃고)
Can’t get up
(일어날 수가 없어)
You hit my heart like a midnight truck
(넌 한밤중의 트럭처럼 내 심장을 들이받았어)
Spinning in your orbit
(네 궤도를 맴돌며)
Crashing through my luck
(내 운명 속으로 돌진하고 있어)
I’m moonstruck, moonstruck
(난 너에게 완전 홀려버렸어)
And I don’t wanna wake up
(그리고 이 꿈에서 깨고 싶지 않아) 

[Bridge]
Shouting at the sky in your backseat (hey!)
(네 차 뒷좌석에서 하늘을 향해 소리쳐)
Windows down
(창문은 내려두고)
We confess on repeat
(우린 끊임없이 서로에게 고백해)
“If we burn
("만약 우리가 타버린다면,)
Yeah we burn” you say
(그래, 타버리는 거지" 라고 넌 말해)
“I’d rather fade out loud than fade away”
("소리 없이 사라질 바에는 불꽃처럼 타오를래")

[Chorus]
I’m moonstruck
(난 홀려버렸어)
Knocked out
(정신을 잃고)
Can’t get up
(일어날 수가 없어)
You hit my heart like a midnight truck
(넌 한밤중의 트럭처럼 내 심장을 들이받았어)
Spinning in your orbit
(네 궤도를 맴돌며)
Crashing through my luck
(내 운명 속으로 돌진하고 있어)
I’m moonstruck, moonstruck
(난 너에게 완전 홀려버렸어)
And I don’t wanna wake up
(그리고 이 꿈에서 깨고 싶지 않아) 

[Outro]
Moonstruck
(달에 홀려버렸어)
Moonstruck
(너에 홀려버렸어)
And I don’t wanna wake up
(그리고 이 꿈에서 깨고 싶지 않아)`
  },
  {
    id: 4,
    title: "Crush on Me",
    artist: "Agust Fools",
    album: "August Is For Fools",
    cover: "https://i.postimg.cc/nrxFYks3/jemog-eul-iblyeoghaseyo-(9).png",
    audio: "https://cdn1.suno.ai/235dfda8-948b-4ace-acdf-dbf1612abecb.mp3",
    lyrics: `[Verse 1]
You keep staring at your phone
(계속 휴대폰만 뚫어져라 쳐다보다가)
Laugh
(피식 웃어)
Then look at me again
(그리고 다시 나를 슬쩍 쳐다보는 너)
Say my name like it’s a joke
(장난처럼 내 이름을 부르지만)
But your cheeks keep giving in
(발그레해진 네 볼은 숨길 수가 없나 봐)

[Pre-Chorus]
We’re “just friends” that’s what you say
(우린 "그냥 친구"라고 넌 말하지)
But your eyes don’t act that way
(하지만 네 눈빛은 전혀 그렇지가 않은걸)
Every secret slips in silence
(말하지 않아도 네 진심이 느껴져)
Every silence feels the same
(이 어색한 공기는 숨길 수가 없나 봐)

[Chorus]
I know you have crush on me
(나한테 반한 거 다 알아)
You don’t have to hide it hide it
(더 이상 숨길 필요 없어)
Reading every word I read
(내가 읽는 단어 하나하나까지 짚어가며)
Like you’re trying to find it find it
(마치 뭔가를 찾아내려는 듯 굴잖아)
If you wanna fall
(빠져들고 싶다면)
Then fall
(그냥 그대로 빠져들어 봐)
You can stop pretending
(이제 연극은 그만하고)
Please
(제발 솔직해져 봐)
‘Cause I know you have crush on me
(네가 날 좋아한다는 거, 이미 다 알고 있으니까)

[Verse 2]
You get jealous when they call
(누가 나한테 전화하면 넌 질투하잖아)
Change the subject
(갑자기 화제를 돌리고)
Change your tone
(목소리 톤도 변하면서)
Say you’re happy for it all
(다 잘된 일이라며 축하한다고 말하지만)
But your fingers tap your phone
(네 손가락은 초조하게 핸드폰을 두드리고 있어)

[Pre-Chorus]
You say I’m “too much to handle”
(나 같은 애는 "감당하기 힘들다"면서)
Laugh then look away embarrassed
(쑥스러운 듯 웃으며 고개를 돌려)
But you’re waiting for a scandal
(그렇지만 넌 내가 선을 넘길 기다리잖아)
For the night we finally let it
(서로의 마음을 터뜨려버릴 그 밤만을)

[Chorus]
I know you have crush on me
(나한테 반한 거 다 알아)
You don’t have to hide it hide it
(더 이상 숨길 필요 없어)
Reading every word I read
(내가 읽는 단어 하나하나까지 짚어가며)
Like you’re trying to find it find it
(마치 뭔가를 찾아내려는 듯 굴잖아)
If you wanna fall
(빠져들고 싶다면)
Then fall
(그냥 그대로 빠져들어 봐)
You can stop pretending
(이제 연극은 그만하고)
Please
(제발 솔직해져 봐)
‘Cause I know you have crush on me
(네가 날 좋아한다는 거, 이미 다 알고 있으니까)

[Bridge]
What if I said I feel it too
(만약 나도 너랑 똑같다고 말하면)
Would you run or would you stay
(넌 도망칠까, 아니면 내 곁에 남을까)
All this almost
(거의 다 와버린 마음들)
Almost truth
(진실에 가까워진 이 순간)
We could say it all today
(오늘 전부 다 말해버릴 수도 있어)

[Chorus]
I know you have crush on me
(나한테 반한 거 다 알아)
You don’t have to hide it
(더 이상 숨길 필요 없어)
Heart is beating through your sleeve
(네 심장 소리가 숨겨지지 않아)
Every time you’re by me
(내 곁에 있을 때마다 말이야)
If you wanna fall
(빠져들고 싶다면)
Then fall
(그냥 이대로 빠져들어)
We could turn this make-believe
(이 서툰 시늉들을 멈추고)
Into something we can keep
(영원히 간직할 소중한 사이가 되자)
‘Cause I know you have crush on me
(네가 날 좋아한다는 거, 이미 다 아니까)`
  },
  {
    id: 5,
    title: "Hungover",
    artist: "Agust Fools",
    album: "August Is For Fools",
    cover: "https://i.postimg.cc/nrxFYks3/jemog-eul-iblyeoghaseyo-(9).png",
    audio: "https://cdn1.suno.ai/f8b2173f-03bb-428e-92b2-967550cb84ce.mp3",
    lyrics: `[Verse 1]
Last night tastes like cherry on my tongue
(어젯밤이 혀끝에 체리처럼 남아있어)
Lipstick on the rim of my cup
(컵 테두리에 묻은 립스틱 자국)
You laughed said I always overdo us
(넌 웃으며 말했지, 내가 늘 우리를 너무 과하게 만든다고)
Guess I never really know when to shut it off
(난 아마 언제 멈춰야 할지 끝내 모르는 것 같아)

[Chorus]
I’m love drunk
(난 사랑에 취해)
Hung over
(숙취에 시달려)
From every word you said
(네가 뱉은 말들 때문에)
Heart still spinning
(심장은 여전히 널 향해 뛰는데)
But your side of the bed’s stone-cold dead
(네 침대 자리는 돌처럼 차갑게 죽어버렸어)
I keep crawling back to
(난 자꾸만 기어들어가)
All the things we never were
(우리가 결코 될 수 없었던 그 순간들로)
Love drunk
(사랑에 취해)
Hung over
(숙취에 시달려)
On the ghost of us that hurts
(우리의 아픈 유령 같은 기억에)

[Verse 2]
Sunlight through the shades
(블라인드 사이로 비치는 햇살이)
Hits my headache
(깨질 듯한 머리를 때려)
Your jacket on the chair like a bad joke
(의자에 걸린 네 재킷은 짓궂은 농담 같아)
Phone full of texts that I can’t send
(보내지 못할 문자들로 꽉 찬 내 핸드폰)
Typing Backspacing
(쓰고, 지우고)
Choking on the almost
(거의 될 뻔했던 그 순간에 숨이 막혀)

[Chorus]
I’m love drunk
(난 사랑에 취해)
Hung over
(숙취에 시달려)
From every word you said
(네가 뱉은 말들 때문에)
Heart still spinning
(심장은 여전히 널 향해 뛰는데)
But your side of the bed’s stone-cold dead
(네 침대 자리는 돌처럼 차갑게 죽어버렸어)
I keep crawling back to
(난 자꾸만 기어들어가)
All the things we never were
(우리가 결코 될 수 없었던 그 순간들로)
Love drunk
(사랑에 취해)
Hung over
(숙취에 시달려)
On the ghost of us that hurts
(우리의 아픈 유령 같은 기억에) 

[Bridge]
If this is how it ends
(이게 끝이라면)
Why does it feel like the start
(왜 시작인 것처럼 느껴질까)
Of something I can’t shake
(떨쳐낼 수 없는 무언가의 시작이)
Poured you straight into my heart (too hard)
(널 내 심장에 너무 진하게 부어버렸어)
Now every morning’s proof
(이제 매일 아침이 증명하고 있어)
That I still taste you in my blood
(네가 여전히 내 피 안에 흐르고 있다는 걸)

[Chorus]
I’m love drunk
(난 사랑에 취해)
Hung over
(숙취에 시달려)
From every word you said
(네가 뱉은 말들 때문에)
Heart still spinning
(심장은 여전히 널 향해 뛰는데)
But your side of the bed’s stone-cold dead
(네 침대 자리는 돌처럼 차갑게 죽어버렸어)
I keep crawling back to
(난 자꾸만 기어들어가)
All the things we never were
(우리가 결코 될 수 없었던 그 순간들로)
Love drunk
(사랑에 취해)
Hung over
(숙취에 시달려)
And I still wake up in your words
(난 여전히 네가 남긴 말들 속에서 눈을 떠)`
  }
];

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  
  // 'nowPlaying' (재생 화면) | 'playlist' (목록 화면)
  const [view, setView] = useState<'nowPlaying' | 'playlist'>('nowPlaying');
  // 플레이리스트 화면에서 현재 커서가 위치한 곡의 인덱스
  const [selectedIndex, setSelectedIndex] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const playlistRef = useRef<HTMLDivElement>(null);

  const currentSong = SONGS[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(e => console.error("Playback failed:", e));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // 플레이리스트 스크롤 자동 이동
  useEffect(() => {
    if (view === 'playlist' && playlistRef.current) {
      const selectedElement = playlistRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, view]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleMenuClick = () => {
    if (view === 'nowPlaying') {
      setSelectedIndex(currentSongIndex);
      setView('playlist');
    } else {
      setView('nowPlaying');
    }
  };

  const handleCenterClick = () => {
    if (view === 'playlist') {
      setCurrentSongIndex(selectedIndex);
      setView('nowPlaying');
      setIsPlaying(true);
    } else {
      togglePlay();
    }
  };

  const nextAction = () => {
    if (view === 'playlist') {
      setSelectedIndex((prev) => Math.min(prev + 1, SONGS.length - 1));
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % SONGS.length);
      setCurrentTime(0);
    }
  };

  const prevAction = () => {
    if (view === 'playlist') {
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setCurrentSongIndex((prev) => (prev - 1 + SONGS.length) % SONGS.length);
      setCurrentTime(0);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative min-h-screen flex flex-col xl:flex-row items-center justify-center p-4 md:p-8 font-sans gap-12 overflow-x-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://i.postimg.cc/MpdZSVn9/jemog-eul-iblyeoghaseyo-(13).png")'
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/40" />

      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-center w-full gap-12 max-w-6xl">
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => {
            setCurrentSongIndex((prev) => (prev + 1) % SONGS.length);
            setCurrentTime(0);
          }}
        />

        {/* Left Column: iPod */}
        <div className="flex justify-center shrink-0">
        <div className="w-[320px] h-[540px] bg-gradient-to-b from-gray-200 to-gray-400 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-gray-300 flex flex-col items-center relative">
          
          {/* Screen */}
          <div className="w-full h-[200px] bg-white rounded-lg border-4 border-gray-800 p-2 overflow-hidden relative flex flex-col">
            {/* Status Bar */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-1 mb-1 px-1 shrink-0">
              <div className="flex items-center space-x-1">
                {isPlaying ? <Play size={12} className="text-gray-800" /> : <Pause size={12} className="text-gray-800" />}
                <span className="text-[10px] font-bold text-gray-800">
                  {view === 'playlist' ? 'iPod' : 'Now Playing'}
                </span>
              </div>
              <Battery size={14} className="text-gray-800" />
            </div>

            {/* Main Screen Content */}
            <div className="flex-1 overflow-hidden flex flex-col">
              {view === 'nowPlaying' ? (
                <>
                  <div className="flex flex-1 items-center overflow-hidden">
                    <div className="w-[100px] h-[100px] shrink-0 flex items-center justify-center p-1">
                      <img 
                        src={currentSong.cover} 
                        alt="Album Cover" 
                        className="w-full h-full object-cover rounded shadow-sm border border-gray-200"
                      />
                    </div>
                    <div className="flex-1 pl-2 flex flex-col justify-center overflow-hidden">
                      <h2 className="text-sm font-bold text-gray-900 truncate">{currentSong.title}</h2>
                      <p className="text-xs text-gray-600 truncate">{currentSong.artist}</p>
                      <p className="text-[10px] text-gray-500 truncate mt-1">{currentSong.album}</p>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="mt-auto px-1 pb-1 shrink-0">
                    <div className="flex justify-between text-[9px] text-gray-600 mb-1 font-mono">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                    <div 
                      className="w-full h-2 bg-gray-200 rounded-full overflow-hidden border border-gray-300 cursor-pointer"
                      onClick={(e) => {
                        if (audioRef.current && duration) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const clickX = e.clientX - rect.left;
                          const newTime = (clickX / rect.width) * duration;
                          audioRef.current.currentTime = newTime;
                          setCurrentTime(newTime);
                        }
                      }}
                    >
                      <div 
                        className="h-full bg-blue-500"
                        style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                      />
                    </div>
                    
                    {/* Volume Bar */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <VolumeX size={10} className="text-gray-500" />
                      <div 
                        className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden border border-gray-300 cursor-pointer"
                        onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const clickX = e.clientX - rect.left;
                          const newVolume = Math.max(0, Math.min(1, clickX / rect.width));
                          setVolume(newVolume);
                        }}
                      >
                        <div 
                          className="h-full bg-gray-500"
                          style={{ width: `${volume * 100}%` }}
                        />
                      </div>
                      <Volume2 size={10} className="text-gray-500" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-full flex flex-col">
                  <div className="bg-gradient-to-b from-gray-300 to-gray-200 text-gray-800 text-xs font-bold px-2 py-1 border-b border-gray-400 shrink-0">
                    Music
                  </div>
                  <div className="flex-1 overflow-y-auto scrollbar-hide" ref={playlistRef}>
                    {SONGS.map((song, index) => (
                      <div 
                        key={song.id}
                        onClick={() => {
                          setSelectedIndex(index);
                          setCurrentSongIndex(index);
                          setView('nowPlaying');
                          setIsPlaying(true);
                        }}
                        className={`cursor-pointer px-2 py-1.5 flex items-center justify-between text-xs border-b border-gray-100 ${
                          index === selectedIndex 
                            ? 'bg-blue-500 text-white font-bold' 
                            : 'text-gray-800'
                        }`}
                      >
                        <span className="truncate pr-2">{song.title}</span>
                        {index === selectedIndex && <ChevronRight size={12} />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Click Wheel */}
          <div className="mt-10 w-52 h-52 bg-white rounded-full relative flex items-center justify-center shadow-inner border border-gray-200">
            {/* Menu Button (Top) */}
            <button 
              onClick={handleMenuClick}
              className="absolute top-3 text-gray-500 font-bold text-xs hover:text-gray-800 transition-colors cursor-pointer p-2"
            >
              MENU
            </button>
            
            {/* Play/Pause Button (Bottom) */}
            <button 
              onClick={togglePlay}
              className="absolute bottom-3 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer p-2 flex items-center justify-center"
            >
              <div className="flex items-center">
                <Play size={14} fill="currentColor" />
                <Pause size={14} fill="currentColor" className="-ml-1" />
              </div>
            </button>
            
            {/* Prev Button (Left) */}
            <button 
              onClick={prevAction}
              className="absolute left-3 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer p-2"
            >
              <SkipBack size={18} fill="currentColor" />
            </button>
            
            {/* Next Button (Right) */}
            <button 
              onClick={nextAction}
              className="absolute right-3 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer p-2"
            >
              <SkipForward size={18} fill="currentColor" />
            </button>

            {/* Center Button */}
            <button 
              onClick={handleCenterClick}
              className="w-20 h-20 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-md border border-gray-300 active:bg-gray-400 transition-colors"
            ></button>
          </div>
          
        </div>
      </div>

      {/* Right Column: Lyrics Display & Instructions */}
      <div className="w-full max-w-md xl:w-1/3 flex flex-col gap-6 h-[540px]">
        
        {/* Lyrics Panel */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
            <div className="flex items-center gap-2 text-zinc-500 mb-6 pb-2 border-b border-zinc-800">
              <AlignLeft size={16} />
              <span className="text-xs font-bold tracking-wider uppercase">Lyrics</span>
            </div>
            <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap text-sm">
              {currentSong.lyrics}
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl text-zinc-400 text-sm shrink-0">
          <h3 className="text-white font-bold mb-3">조작 방법</h3>
          <ul className="space-y-2">
            <li>• <strong>MENU</strong>: 플레이리스트 / 재생화면 전환</li>
            <li>• <strong>가운데 버튼</strong>: 곡 선택 (목록) / 재생 및 일시정지</li>
            <li>• <strong>좌/우 버튼</strong>: 곡 이동 (목록) / 이전·다음 곡</li>
            <li>• <strong>화면 터치</strong>: 곡 바로 재생 (목록) / 구간 이동 (재생바)</li>
            <li>• <strong>볼륨 조절</strong>: 재생 화면 하단의 볼륨바 클릭</li>
          </ul>
        </div>

      </div>

      </div>

    </div>
  );
}

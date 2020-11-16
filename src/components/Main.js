import React from 'react';
import Language from './Language';
import Course from './Course';
import ContactForm from './ContactForm';
import Voice from './Voice';

//画像の読み込み
import english from './images/english.png';
import french from './images/french.png';
import chinese from './images/chinese.png';
import korean from './images/korean.png';
import german from './images/german.png';
import italian from './images/italian.png';
import man from './images/man.jpg';
import parent from './images/parent.jpg';
import student from './images/student.jpg';
import oldCouple from './images/oldCouple.jpg';
import lines from './images/lines.png';
import ribbon from './images/ribbon.png';

//FontAwesomeからiconを読み込み
import { faUserGraduate,faChild,faPlaneDeparture,faUserTie, faRibbon} from "@fortawesome/free-solid-svg-icons";
import { faComments} from "@fortawesome/free-regular-svg-icons";

class Main extends React.Component{
    render(){
        const languageList=[
            {
                name:'英語',
                image:english,
                explanation:'',
            },
            
            {
                name:'フランス語',
                image:french,
                explanation:'',
            },
            
            {
                name:'中国語',
                image:chinese,
                explanation:'',
            },
            
            {
                name:'韓国語',
                image:korean,
                explanation:'',
            },
            
            {
                name:'ドイツ語',
                image:german,
                explanation:'',
            },
            
            {
                name:'イタリア語',
                image:italian,
                explanation:'',
            },
        ];

        const courseList=[
            {
                name:'日常会話',
                icon:faComments,
                explanation:'日常会話習得を目指すコースです。このコースの中でも、初級・中級・上級と3段階あります。\n言語を始めたい方、海外の人と話せるようになりたい方におすすめです。',
            },
            
            {
                name:'ビジネス',
                icon:faUserTie,
                explanation:'ビジネスレベルの言語を身に着けるコースです。実務で使える実践的な言葉を身に着けられます。\n海外のお客様とのやり取りが多い方や、出張・転勤がある方にもおすすめです。',
            },
            
            {
                name:'試験対策',
                icon:faUserGraduate,
                explanation:'学生や試験を控えている方向けのコースです。中学生・高校生にはテスト対策を中心に行い、英検やTOEIC,TOFLE受験者に対するサポートも行っています。',
            },
            
            {
                name:'英才教育',
                icon:faChild,
                explanation:'英語などの授業が始まる前の未就学児や小学校低学年の方向けのコースです。子供に早く言語を身につけさせたい方におすすめです。',
            },

            {
                name:'旅行準備',
                icon:faPlaneDeparture,
                explanation:'旅行ではやはり現地の言葉でコミュニケーションをとってみたくありませんか？そんな方々におすすめのコースです。短期間からご用意しています。',
            },
        ];

        const voiceList=[
            {
                name:'10歳以下',
                title:'英語×英才教育',
                image:parent,
                detail:'英語を学びたいという娘の希望もあり、英才教育コースに通わせています。\n最初は少し心配でしたが、先生方も教えるのが上手で、毎週楽しく通っています。英語圏への旅行を計画しているため、本人に成長を実感してくれたらと思っています。',
            },

            {
                name:'10代女性',
                title:'英語×試験対策',
                image:student,
                detail:'大学受験を控えており、英語の試験対策コースを受講しています。\nもともと英語は得意ではないのですが、第一希望の大学に必須のため、日々頑張っています。直近の模擬試験では、今までより10程度偏差値が上がりました。もっと伸ばして、第一希望に合格したいです。。',
            },
            
            {
                name:'30代男性',
                title:'ドイツ語×ビジネス',
                image:man,
                detail:'半年ほど前にドイツへの転勤が決まり、それまでにドイツ語を習得せざるを得ない状況になりました。\n日常会話ではなくビジネスレベルが必要なので最初は不安でしたが、受講した結果、今ではドイツ支社とのやり取りは全て私で請け負うレベルに成長しました。来月から赴任なので頑張ります。',
            },

            {
                name:'60代夫婦',
                title:'中国語×日常会話',
                image:oldCouple,
                detail:'2人とも中国が好きで、定年退職したあとに趣味として始めました。\n先生もとても丁寧に教えてくださり、やる気を出すのもお上手なので、大変感謝しております。来年に中国へ旅行しようと考えているので、もっと中国語を使えるように練習していきます。',
            },
        ];

        return(
            <div className='main'>
                <div className='main-wrapper'>
                    <h1>広がれ、<br />私の可能性。</h1>
                </div>
                
                <img className='lines' src={lines} />

                <a name='link-lang'></a>
                <div className="content">
                    <div className='language-course'>
                        <h2 className='sectionTitle'>Languages {'&'} Courses</h2>
                        <p className='subtitle'>6つの言語・5つのコース</p>
                        
                        <div className='language'>
                            {languageList.map((languageItem)=>{
                                return(
                                    <Language
                                    name={languageItem.name}
                                    image={languageItem.image}
                                    />
                                );
                            })}
                        </div>
                        
                        <div className='course-container'>
                            {courseList.map((courseItem)=>{
                                return(                                    
                                    <Course
                                    name={courseItem.name}
                                    icon={courseItem.icon}
                                    explanation={courseItem.explanation}
                                    />
                                );
                            })}
                        </div>

                    </div>
                    
                    <a name='link-voice'></a>
                    <div className='voice'>
                        <h2 className='sectionTitle'>Voices</h2>
                        <p className='subtitle'>お客様の声</p>
                            <div className='voice-container'>
                                {voiceList.map((voiceItem)=>{
                                    return(
                                        <Voice
                                        name={voiceItem.name}
                                        image={voiceItem.image}
                                        title={voiceItem.title}
                                        detail={voiceItem.detail}
                                        />
                                    );
                                })}
                            </div>
                    </div>
                    
                    <a name='link-message'></a>
                    <div className='message'>
                        <img className='ribbon' src={ribbon}/>
                        <h2 className='sectionTitle'>Message</h2>
                        <p className='subtitle'>メッセージ</p>
                        <p>言語を習得すること。</p>
                        <p>それは、新たな世界、新たな人々と出会うことです。</p>
                        <p>今まで出会ったことのないことに接する中で、私たちは成長します。</p>
                        <p>そして、成長するに伴って、できることや挑戦できることの可能性も広がっていきます。</p>
                        <p>私たちは、一人でも多くの人々に新しい世界を見て、</p>
                        <p>自分の可能性を大きく広げていってほしいと考えています。</p>
                    </div>
                
                </div>
                    
                    <a name='link-form'></a>
                    <div className='contact'>
                        <div className='contact-titles'>
                            <h2 className='sectionTitle'>Contact</h2>
                            <p className='subtitle'>お問合せ</p>
                        </div>
                        <ContactForm />
                    </div>
                
            </div>
        );
    }
}

export default Main;
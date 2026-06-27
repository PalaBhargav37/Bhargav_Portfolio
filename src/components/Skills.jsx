import { useReveal } from '../hooks/useReveal';
import './Skills.css';

const CATEGORIES = [
  { icon:'☕', title:'Backend', color:'#8b5cf6', skills:[{name:'Java',level:85},{name:'Python',level:88},{name:'Django',level:68},{name:'REST APIs',level:70},{name:'JDBC / SQL',level:75}] },
  { icon:'🎨', title:'Frontend', color:'#06b6d4', skills:[{name:'React',level:72},{name:'JavaScript',level:80},{name:'HTML & CSS',level:88},{name:'Bootstrap',level:82}] },
  { icon:'🧠', title:'AI / ML', color:'#ec4899', skills:[{name:'Neural Networks (ANN)',level:60},{name:'NumPy / SciPy',level:58},{name:'Signal Processing',level:60}] },
  { icon:'🛠️', title:'Tools & Cloud', color:'#f59e0b', skills:[{name:'Git & GitHub',level:85},{name:'AWS Cloud',level:68},{name:'DSA & Algorithms',level:60},{name:'Agile / Scrum',level:78}] },
];

function SkillBar({ name, level, color }) {
  return (
    <div className="skill-row">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-pct" style={{color}}>{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{'--fill':`${level}%`,'--cat-color':color}}/>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="skills-section">
      <div className="container" ref={ref}>
        <div className="reveal">
          <p className="section-label">🧠 What I know</p>
          <h2 className="section-heading">Skills & Expertise</h2>
        </div>
        <div className="skills-grid">
          {CATEGORIES.map((cat,ci)=>(
            <div key={cat.title} className={`skill-card glass reveal delay-${(ci+1)*100}`} style={{'--cat-color':cat.color}}>
              <div className="skill-card-header">
                <span className="cat-icon">{cat.icon}</span>
                <h3 className="cat-title" style={{color:cat.color}}>{cat.title}</h3>
                <div className="cat-line" style={{background:`linear-gradient(90deg,${cat.color},transparent)`}}/>
              </div>
              <div className="skill-list">
                {cat.skills.map(s=><SkillBar key={s.name} {...s} color={cat.color}/>)}
              </div>
            </div>
          ))}
        </div>
        <div className="reveal delay-400">
          <p className="section-label">🛠️ all technologies</p>
          <div className="pills-row">
            {['Java','Python','Django','React','JavaScript','HTML5','CSS3','Bootstrap','SQLite','JDBC','Git','AWS','NumPy','SciPy','C','REST API','Agile','DSA','OOP','MLP / ANN'].map((t,i)=>(
              <span key={t} className={`pill ${i%4===0?'pill-cyan':i%4===2?'pill-pink':''}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

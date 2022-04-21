import React from 'react'
import { Link } from 'react-router-dom';

function ReferInfo({id, title, desc, desc2, element, tag, version, view, use, image, link, definition, Accessibility, mdn, wrc}){
  return(
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <Link to={{
          pathname : "/refer-detail",
          state: {id, title, desc},
        }}>
          {desc.slice(0, 180)}
        </Link>
      </td>
    </tr>
  )
}






function ReferCont({refers, color}) {
  return (
    <section className={`refer__cont ${color}`}>
      <div className="container">
        <div className="refer__inner">
          <h2>HTML Reference</h2>
          <table>
            <colgroup>
              <col style={{width: "10%"}} />
              <col style={{width: "20%"}} />
              <col style={{width: "70%"}} />
            </colgroup>
            <tbody>
              {refers.map((refer) => (
                <ReferInfo
                  key={refer.title}
                  id={refer.id}
                  title={refer.title}
                  desc={refer.desc}
                />
              ))}
              {/* <tr>
                <td>1</td>
                <td>align-content</td>
                <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>align-items</td>
                <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>align-items</td>
                <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>align-items</td>
                <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>align-items</td>
                <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>align-items</td>
                <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
export default ReferCont
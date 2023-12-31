import {useState,useRef} from 'react'

export default function BoardRefFuncPractice() {
    const [inputWriter,setInputwriter]=useState('')
    const [inputTitle,setInputtitle]=useState('')
    const [comments,setComment]=useState([]);
    const [inputSearch,setInputsearch]=useState('')
    const [searchType,setSearchtype]=useState('title')
    const [results,setResults]=useState([])
    //useRef() 실습 코드 추가
    const inputWriterRef=useRef()
    const inputTitleRef=useRef()
   const addComment=()=>{
        if(!inputWriter){
            inputWriterRef.current.focus();
        }else if(!inputTitle){
            inputTitleRef.current.focus();
        }else{
        const newComment={
            writer:inputWriter,
            title:inputTitle,
        }
        setComment([...comments,newComment])
        setInputtitle('')
        setInputwriter('')
    }
    }
    const searchComment=()=>{
        const searchResult=comments.filter(value=>{
            const type=value[searchType]
            const include=type.includes(inputSearch)
            if(!include){
                return false
            }
            return true;
            
        })
        setResults(searchResult)
    }
  return <>
        <form>
          <label htmlFor="writer">작성자:</label>
          <input
            id="writer"
            ref={inputWriterRef}
            type="text"
            value={inputWriter}
            onChange={(e) => setInputwriter(e.target.value)}
          />
          <label htmlFor="title">제목:</label>
          <input
            id="title"
            ref={inputTitleRef}
            type="text"
            value={inputTitle}
            onChange={(e) => setInputtitle(e.target.value )}
          />
          <button type="button" onClick={addComment}>
            작성
          </button>
        </form>
        <form>
          <select
            value={searchType}
            onChange={(e) => setSearchtype(e.target.value )}
          >
            <option value={"writer"}>작성자</option>
            <option value={"title"}>제목</option>
          </select>
          <input
            type="text"
            placeholder="검색어"
            value={inputSearch}
            onChange={(e) => setInputsearch(e.target.value )}
          />
          <button type="button" onClick={searchComment}>검색</button>
        </form>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4>검색결과</h4>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {results.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
  </>;
}

import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Result from '../components/Result'
import request from '../utils/request'

export default function Home({results}) {

  return (
    <div>
      <Head>
        <title>Hulu 3.0</title>
      </Head>
        <Header/>
        <Nav/>
        <Result results={results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
   
 const genre = context.query.genre;

 console.log(request[genre]?.url);

 const fetchData = await fetch(`https://api.themoviedb.org/3/${request.fetchTrending.url}`)
 const resData = await fetchData.json();
 
 return {
   props :{
     results : resData.results
   }
 }


}
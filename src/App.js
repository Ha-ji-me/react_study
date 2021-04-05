import './App.css'
import MemoPage from './memo/MemoPage'

function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4 ">ばろほのMemoApplication</h1>
      <div className="container">
        <h4 className="my-3">〜メモ入力・検索・削除機能（時間記憶付き）〜</h4>
        <MemoPage />
      </div>
    </div>
  )
}

export default App

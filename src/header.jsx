import './App.css'

function Header() {
  return (
    <>
      <header>
        <div className="AllHeader">
            <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="142" height="26" viewBox="0 0 142 26" fill="none">
              <path d="M10.0558 0L4.35686 0L8.50875 4L10.0558 0Z" fill="white"/>
              <path d="M34.9647 26H0L10.0558 0L21.7107 0L14.2333 19.3333H25.8882L33.3656 0H45.0205L34.9647 26Z" fill="white"/>
              <path d="M59.4732 6.66667L54.5742 19.3333H77.884L75.3056 26H40.3409L50.3967 0H85.3614L82.783 6.66667H59.4732Z" fill="white"/>
              <path d="M99.6687 6.66667L92.1804 26H80.5086L87.9969 6.66667H82.7792L85.3614 0H113.923L111.341 6.66667H99.6687Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M119.248 0H116.596L106.339 26H108.991L119.248 0ZM121.974 0H127.639L117.329 26H111.664L121.974 0ZM130.352 0H142L131.703 26H120.055L130.352 0Z" fill="#FF001D"/>
              </svg>
            </div>
          <div className="yslygi">
            <button className='ysl_btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.25C0.335786 0.25 0 0.585786 0 1C0 1.41421 0.335786 1.75 0.75 1.75H16.75C17.1642 1.75 17.5 1.41421 17.5 1C17.5 0.585786 17.1642 0.25 16.75 0.25H0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H16.75C17.1642 5.25 17.5 5.58579 17.5 6C17.5 6.41421 17.1642 6.75 16.75 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM0 11C0 10.5858 0.335786 10.25 0.75 10.25H16.75C17.1642 10.25 17.5 10.5858 17.5 11C17.5 11.4142 17.1642 11.75 16.75 11.75H0.75C0.335786 11.75 0 11.4142 0 11Z" fill="white"/>
</svg><p>Услуги</p>
            </button>
          </div>
          <div className="navigator">
            <button className="teg">Работы</button>
            <button className="teg">О компании</button>
            <button className="teg">Акции</button>
            <button className="teg">Контакты</button>
          </div>
          <a href="" className="phone">+7 495 207 75 70</a>
        </div>
      </header>
    </>
  )
}

export default Header

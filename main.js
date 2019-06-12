const container = document.querySelector('#root');

class Quote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        author: "DevAbidemi",
        quote: "We All Win",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res => res.json())
    .then(data => { 
        this.setState(data.quotes[Math.floor(Math.random() * data.quotes.length)])
    })
  }

  render() {  
    return (
      <div id="quote-box">
        <p id="text">{this.state.quote}</p>
        <h3 id="author">{this.state.author}</h3>
        <button id="new-quote" onClick={this.handleClick}>
          Quote
        </button>
        <a
          id="tweet-quote"
          href={`http://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author} &hashtags=quotes`}
          target="_blank"
        >
          Share on Twitter
        </a>
      </div>
    );
  }
}

ReactDOM.render(<Quote />, container);

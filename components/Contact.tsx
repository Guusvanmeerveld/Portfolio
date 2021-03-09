const Contact = () => (
  <div className="contact">
    <div className="container">
      <div className="header" id="contact">
        Contact
      </div>
      <form className="content" method="POST" action="/contact" data-netlify="true" name="contact">
        <fieldset>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" required placeholder="Your email address" id="email" />
          <label htmlFor="type">Message type</label>
          <select name="type" id="type">
            <option value="bug">Bug</option>
            <option value="question">Question</option>
            <option value="suggestion">Suggestion</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="message">Message</label>
          <textarea required name="message" placeholder="Your message" id="message"></textarea>
          <input className="button" type="submit" value="Send" />
        </fieldset>
      </form>
    </div>
  </div>
);

export default Contact;

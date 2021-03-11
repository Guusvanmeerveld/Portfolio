const Contact = () => (
  <div className="contact">
    <div className="container">
      <div className="header" id="contact">
        Contact
      </div>
      <form
        encType="application/x-www-form-urlencoded"
        action="/thanks"
        className="content"
        method="POST"
        data-netlify="true"
        name="contact"
        data-netlify-recaptcha="true"
      >
        <label htmlFor="email">Email</label>
        <input name="email" type="email" required placeholder="Your email address" id="email" />
        <label htmlFor="type">Message type</label>
        <select name="type[]" id="type">
          <option value="bug">Bug</option>
          <option value="question">Question</option>
          <option value="suggestion">Suggestion</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="message">Message</label>
        <textarea required name="message" placeholder="Your message" id="message"></textarea>
        <div data-netlify-recaptcha="true"></div>
        <button className="button" type="submit">
          Send
        </button>
      </form>
    </div>
  </div>
);

export default Contact;

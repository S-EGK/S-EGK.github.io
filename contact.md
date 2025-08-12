
---
layout: base
title: "Contact"
permalink: /contact/
---

<h1>Contact</h1>
<p class="muted">This form uses Formspree. Add your endpoint in <code>_config.yml</code> &rarr; <code>contact.formspree_endpoint</code>.</p>

<form id="contact-form" class="contact-form" method="POST">
  <label>
    Your name
    <input name="name" required>
  </label>
  <label>
    Your email
    <input type="email" name="email" required>
  </label>
  <label>
    Message
    <textarea name="message" rows="6" required></textarea>
  </label>
  <button type="submit" class="btn">Send</button>
  <p id="form-status" class="muted" role="status" aria-live="polite"></p>
</form>

<script src="{{ '/assets/js/contact.js' | relative_url }}"></script>

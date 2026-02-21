---
layout: page
title: Contact
permalink: /contact/
---

<div class="contact-grid">

  <!-- LEFT: Web3Forms email form -->
  <section class="contact-panel reveal">
    <h2 class="contact-title">Contact me</h2>
    <p class="muted contact-subtitle">
      Interested in robotics collaborations or discussing autonomous systems development? Feel free to reach out.
    </p>

    <form action="https://api.web3forms.com/submit" method="POST" class="contact-form">
      <!-- Web3Forms Access Key -->
      <input type="hidden" name="access_key" value="15b183b0-4792-48e9-ba6d-f27dd8394e46">

      <!-- Optional: customize the email subject Web3Forms sends you -->
      <input type="hidden" name="from_name" value="Portfolio Contact Form">
      <input type="hidden" name="subject" value="New message from s-egk.github.io">

      <!-- Optional: redirect after submit (remove if you prefer Web3Forms default) -->
      <!-- <input type="hidden" name="redirect" value="https://s-egk.github.io/contact/?success=1"> -->

      <!-- Honeypot spam protection -->
      <input type="checkbox" name="botcheck" class="hidden" style="display:none;">

      <div class="form-row">
        <div class="field">
          <label for="firstName">First name</label>
          <input id="firstName" name="first_name" type="text" placeholder="First name" required>
        </div>

        <div class="field">
          <label for="lastName">Last name</label>
          <input id="lastName" name="last_name" type="text" placeholder="Last name" required>
        </div>
      </div>

      <div class="form-row">
        <div class="field">
          <label for="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="Email address" required>
        </div>

        <div class="field">
          <label for="topic">Subject</label>
          <input id="topic" name="topic" type="text" placeholder="Subject" required>
        </div>
      </div>

      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="7" placeholder="Write your message..." required></textarea>
      </div>

      <button class="btn primary" type="submit">Send Message</button>

      <p class="muted tiny">
        This form is processed by Web3Forms and delivered to my inbox.
      </p>
    </form>
  </section>

  <!-- RIGHT: Contact details -->
  <aside class="contact-details reveal">
    <h2 class="contact-title">Contact details</h2>

    <div class="details-list">
      <div class="detail-item">
        <div class="detail-label">Name</div>
        <div class="detail-value">Srikanth Karnam</div>
      </div>

      <div class="detail-item">
        <div class="detail-label">Email</div>
        <div class="detail-value">
          <a href="mailto:egk.srikanth@gmail.com">egk.srikanth@gmail.com</a>
        </div>
      </div>

      <div class="detail-item">
        <div class="detail-label">LinkedIn</div>
        <div class="detail-value">
          <a href="https://www.linkedin.com/in/srikanthegk/" target="_blank" rel="noopener">
            linkedin.com/in/srikanthegk
          </a>
        </div>
      </div>

      <div class="detail-item">
        <div class="detail-label">GitHub</div>
        <div class="detail-value">
          <a href="https://github.com/S-EGK" target="_blank" rel="noopener">
            github.com/S-EGK
          </a>
        </div>
      </div>
    </div>
  </aside>

</div>

---
layout: base
title: "Blog"
permalink: /blog/
---

<h1>Blog</h1>
{% if site.blog_enabled %}
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="muted"> — {{ post.date | date: "%b %d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
  {% if site.posts == empty %}
  <p class="muted">No posts yet. Add markdown files under <code>_posts/</code> like <code>YYYY-MM-DD-title.md</code>.</p>
  {% endif %}
{% else %}
  <p class="muted">Blog is disabled. Set <code>blog_enabled: true</code> in <code>_config.yml</code>.</p>
{% endif %}

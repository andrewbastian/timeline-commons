import redis
import json

r = redis.Redis()

users = [
  {'username': 'bob', 'password': 'qwer', 'join_date': '', 'websites': '', 'blogs': '', 'reading': '', 'watching': '', 'listening': '', 'bio': '', 'avatar': '', 'project_memberships': []},
  {'username': 'joe', 'password': 'qwer', 'join_date': '', 'websites': '', 'blogs': '', 'reading': '', 'watching': '', 'listening': '', 'bio': '', 'avatar': '', 'project_memberships': []},
  {'username': 'lisa', 'password': 'qwer', 'join_date': '', 'websites': '', 'blogs': '', 'reading': '', 'watching': '', 'listening': '', 'bio': '', 'avatar': '', 'project_memberships': []},
  {'username': 'jim', 'password': 'qwer', 'join_date': '', 'websites': '', 'blogs': '', 'reading': '', 'watching': '', 'listening': '', 'bio': '', 'avatar': '', 'project_memberships': []},
  {'username': 'jk_rowling', 'password': 'qwer', 'join_date': '', 'websites': '', 'blogs': '', 'reading': '', 'watching': '', 'listening': '', 'bio': '', 'avatar': '', 'project_memberships': []},
  {'username': 'frodo', 'password': 'qwer', 'join_date': '', 'websites': '', 'blogs': '', 'reading': '', 'watching': '', 'listening': '', 'bio': '', 'avatar': '', 'project_memberships': []},
  {'username': 'sauron', 'password': 'qwer', 'join_date': '', 'websites': '', 'blogs': '', 'reading': '', 'watching': '', 'listening': '', 'bio': '', 'avatar': '', 'project_memberships': []},
  {'username': 'harry', 'password': 'qwer', 'join_date': '', 'websites': '', 'blogs': '', 'reading': '', 'watching': '', 'listening': '', 'bio': '', 'avatar': '', 'project_memberships': []},
]

projects = [
  {'managers': [0, 2, 4], 'events': [0, 1], 'title': 'Moon Landing: IS IT REAL???'},
  {'managers': [1, 2, 3], 'events': [2, 3], 'title': 'Jeffrey Epstein: Man or lizard?'},
  {'managers': [5], 'events': [4], 'title': 'Majestic 12'},
  {'managers': [4], 'events': [1, 5, 6, 7, 8, 9], 'title': 'Men in Black'},
  {'managers': [3], 'events': [8, 9], 'title': 'Aliens are with us now'},
]

events = [
  {'category_tags': [], 'entity_tags': [], 'display_date': '', 'actual_date': None, 'title': 'Moon base construction', 'comments': 'build the wall', 'body': 'MAGA mofo', 'url': 'https://fake.com', 'created_by': '', 'country_tags': [], 'draft': True},
  {'category_tags': [], 'entity_tags': [], 'display_date': '', 'actual_date': None, 'title': 'Apollo 11 launch', 'comments': 'fake news', 'body': 'parts... lol', 'url': 'https://something.com', 'created_by': '', 'country_tags': [], 'draft': True},
  {'category_tags': [], 'entity_tags': [], 'display_date': '', 'actual_date': None, 'title': 'Lizard anatomy discovery', 'comments': 'dope story', 'body': 'hahahahahaha', 'url': 'https://nothing.org', 'created_by': '', 'country_tags': [], 'draft': True},
  {'category_tags': [], 'entity_tags': [], 'display_date': '', 'actual_date': None, 'title': 'Sex cult formation', 'comments': '', 'body': '', 'url': '', 'created_by': '', 'country_tags': [], 'draft': True},
  {'category_tags': [], 'entity_tags': [], 'display_date': '', 'actual_date': None, 'title': 'Majestic 12 formation', 'comments': '', 'body': '', 'url': '', 'created_by': '', 'country_tags': [], 'draft': True},
  {'category_tags': [], 'entity_tags': [], 'display_date': '', 'actual_date': None, 'title': 'Will Smith birth', 'comments': '', 'body': '', 'url': '', 'created_by': '', 'country_tags': [], 'draft': True},
  {'category_tags': [], 'entity_tags': [], 'display_date': '', 'actual_date': None, 'title': 'Abduction of Andrew Bastian', 'comments': '', 'body': '', 'url': '', 'created_by': '', 'country_tags': [], 'draft': True},
  {'category_tags': [], 'entity_tags': [], 'display_date': '', 'actual_date': None, 'title': 'Discovery of the Anal Probe', 'comments': '', 'body': '', 'url': '', 'created_by': '', 'country_tags': [], 'draft': True},
  {'category_tags': [], 'entity_tags': [], 'display_date': '', 'actual_date': None, 'title': 'Majestic 12 alien prison system construction', 'comments': '', 'body': '', 'url': '', 'created_by': '', 'country_tags': [], 'draft': True},
]

for i, user in enumerate(users):
  r.set('user:%s' % i, json.dumps(user))

for i, project in enumerate(projects):
  r.set('project:%s' % i, json.dumps(project))
  
for i, event in enumerate(events):
  r.set('event:%s' % i, json.dumps(event))

for prefix in ['user', 'project', 'event']:
  print('%s keys: %s' % (prefix, r.keys('%s:*' % prefix)))

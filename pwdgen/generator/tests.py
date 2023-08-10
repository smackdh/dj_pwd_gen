from django.test import TestCase
from django.urls import reverse


class SimpleTestCase(TestCase):
    def test_home_page(self):
        response = self.client.get(
            reverse("generator")
        )  # Replace 'home' with the name of your view's URL
        self.assertEqual(response.status_code, 200)

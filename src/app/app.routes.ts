import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PravacyPolicyComponent } from './pages/pravacy-policy/pravacy-policy.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthorPageComponent } from './pages/author-page/author-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            {
                path: 'blog',
                component: BlogComponent,
                title: 'Blog'
            },
            {
                path: 'blog-post',
                component: BlogPostComponent,
                title: 'Blog-post'
            },
            {
                path: 'about-us',
                component: AboutUsComponent,
                title: 'About Us'
            },
            {
                path: 'category',
                component: CategoryPageComponent,
                title: 'Category'
            },
            {
                path: 'authors',
                component: AuthorPageComponent,
                title: 'Authors'
            },
            {
                path: 'contact',
                component: ContactComponent,
                title: 'Contact'
            },
            {
                path: 'pravacy-policy',
                component: PravacyPolicyComponent,
                title: 'Pravacy Policy'
            },
            {
                path: '**',
                component: PageNotFoundComponent,
                title: 'Page Not Found'
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'Page Not Found'
    }
]

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
import { LogInComponent } from './pages/log-in/log-in.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminCategoriesComponent } from './pages/admin/admin-categories/admin-categories.component';
import { AdminAuthorsComponent } from './pages/admin/admin-authors/admin-authors.component';
import { AdminBlogAllPostsComponent } from './pages/admin/admin-blog-all-posts/admin-blog-all-posts.component';

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
                path: 'blog-post/:id',
                component: BlogPostComponent,
                title: 'Blog-post'
            },
            {
                path: 'about-us',
                component: AboutUsComponent,
                title: 'About Us'
            },
            {
                path: 'category/:id',
                component: CategoryPageComponent,
                title: 'Category'
            },
            {
                path: 'authors/:id',
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
            }
        ]
    },
    {
        path: 'log-in',
        component: LogInComponent,
        title: 'Log In'
    },

    {
        path: 'AdminLayout',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'Admin-categories',
                component: AdminCategoriesComponent,
                title: 'Admin Categories'
            },
            {
                path: 'Admin-Authors/:id',
                component: AdminAuthorsComponent,
                title: 'Admin Authors'
            },
            {
                path: 'Admin-blogAllPosts',
                component: AdminBlogAllPostsComponent,
                title: 'Admin Blog All Posts'
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'Page Not Found'
    }
]


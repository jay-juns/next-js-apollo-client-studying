import { NextPage } from 'next'
import MainLayout from '../component/layouts/Main'
import DefaultLayout from '../component/layouts/Default'

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }

type PageWithPostLayoutType = NextPage & { layout: typeof DefaultLayout }

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType

export default PageWithLayoutType
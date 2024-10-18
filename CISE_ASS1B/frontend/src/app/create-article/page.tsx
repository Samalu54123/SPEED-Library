'use client'

import CreateArticleComponent from "@/components/User/CreateArticle";
import NavBar from "@/./components/User/NavBar";

export default function CreateArticle() {
  return (
    <main>
       <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Create Article" />
      <CreateArticleComponent/>
    </main>
  );
}

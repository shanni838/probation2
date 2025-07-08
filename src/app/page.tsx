import Image from "next/image";
import { getPosts } from '@/lib/posts';
import { Post } from '@/ui/post';

export default function Home() {
  return (
    <div>
    <h1>hello shanni, ini naomi</h1>
    <select name="form" >
      <option value="1">250</option>
      <option value="2">500</option>
      <option value="3">1000</option>
      <option value="4">2000</option>
    </select>
    <input type="number" value="1" min="1"></input>
    <Image src="/profil.png" alt="Profile" width={500} height={1500} />
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
    </div>
  )
}

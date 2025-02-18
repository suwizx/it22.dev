<script lang="ts">
  import members from "./member.json";
  import { Icon } from "svelte-icons-pack";
  import { AiOutlineLink } from "svelte-icons-pack/ai";
  import { BsFacebook } from "svelte-icons-pack/bs";
  import { BsGithub } from "svelte-icons-pack/bs";
  import { BsInstagram } from "svelte-icons-pack/bs";
  import { BsLinkedin } from "svelte-icons-pack/bs";
  import { AiOutlineX } from "svelte-icons-pack/ai";

  let colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-indigo-500",
  ]
</script>

<div class="flex items-center justify-center w-full min-h-dvh p-4">
  <div class="container">
    <div class="mb-4">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">IT<span class="text-blue-500">22</span> <span class="text-white">Member</span></h1>
      <p>If you are IT22 you can add you profile in this page.</p>
      <p>Add you data in <a href="https://github.com/suwizx/it22.dev" class="text-orange-500 hover:underline">it22.dev repository</a>.</p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {#if members}
        {#each members as member}
          <div class="border border-zinc-600 p-4 rounded-xl">
            <img
              src={member.cover_image}
              alt={`${member.name} Cover | it22.dev`}
              class="w-full rounded-lg aspect-[16/4] object-cover"
            />
            <div class="flex gap-6 items-start">
              <img
                src={member.avatar}
                alt={`${member.name} | it22.dev`}
                class="w-24 h-24 rounded-full object-cover border-4 box-content border-zinc-950 -translate-y-[50%] translate-x-4"
              />
              <div class="py-4 flex flex-wrap gap-4 items-center flex-1">
                <div class="flex-1">
                  <h2 class="font-bold  md:text-2xl truncate w-31 md:w-full flex-1">{member.name}</h2>
                  <p class="text-blue-500 font-bold uppercase">
                    <span class="text-orange-500">std</span>{member.std_id}
                  </p>
                </div>
                {#if member.call_to_action}
                  <a
                    href={member.call_to_action.link}
                    target="_blank"
                    class="uppercase bg-blue-500 py-1 px-2 md:px-4 rounded-lg font-bold flex items-center gap-2"
                    > <span class="hidden md:block">{member.call_to_action.text}</span><Icon
                      src={AiOutlineLink}
                      size={"1.4em"}
                    /></a
                  >
                {/if}
              </div>
            </div>
            <div class="px-2 -mt-2">
              <p>
                {member.bio}
              </p>
              <div class="flex gap-4 mt-4">
                {#if member.socials.facebook}
                  <a
                    href={member.socials.facebook}
                    class="hover:opacity-75"
                    target="_blank"><Icon size={"1.6em"} src={BsFacebook} /></a
                  >
                {/if}
                {#if member.socials.github}
                  <a
                    href={member.socials.github}
                    class="hover:opacity-75"
                    target="_blank"><Icon size={"1.6em"} src={BsGithub} /></a
                  >
                {/if}
                {#if member.socials.instagram}
                  <a
                    href={member.socials.instagram}
                    class="hover:opacity-75"
                    target="_blank"><Icon size={"1.6em"} src={BsInstagram} /></a
                  >
                {/if}
                {#if member.socials.linkedin}
                  <a
                    href={member.socials.linkedin}
                    class="hover:opacity-75"
                    target="_blank"><Icon size={"1.6em"} src={BsLinkedin} /></a
                  >
                {/if}
                {#if member.socials.twitter}
                  <a
                    href={member.socials.twitter}
                    class="hover:opacity-75"
                    target="_blank"><Icon size={"1.6em"} src={AiOutlineX} /></a
                  >
                {/if}
                {#if member.socials.website}
                  <a
                    href={member.socials.website}
                    class="hover:opacity-75"
                    target="_blank"
                    ><Icon size={"1.6em"} src={AiOutlineLink} /></a
                  >
                {/if}
              </div>
            </div>
            <div class="p-2">
              {#if member.tags.length > 0}
                <div class="flex gap-2 mt-4 flex-wrap">
                  {#each member.tags as tag , tag_index}
                    <span
                      class={`px-2 py-1 rounded-lg text-white font-bold text-xs text-nowrap  ${colors[tag_index % colors.length]}`}
                      >{tag}</span
                    >
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</div>

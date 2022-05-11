<#include "./module/layout.ftl" />
<@layout title="分类：${category.name!} - ${blog_title!}">
    <#include "module/post-entry.ftl">
    <#if posts.totalPages gt 1>
        <@paginationTag method="categoryPosts" page="${posts.number?c}" total="${posts.totalPages?c}" display="3" slug="${category.slug!}">
            <div class="pagination flex justify-between items-center">
                <#if pagination.hasPrev>
                    <a class="btn" role="navigation" href="${pagination.prevPageFullPath!}">上一页</a>
                </#if>
                <span class="text-sm">${posts.number+1}/${posts.totalPages!}</span>
                <#if pagination.hasNext>
                    <a class="btn" role="navigation" href="${pagination.nextPageFullPath!}">下一页</a>
                </#if>
            </div>
        </@paginationTag>
    </#if>
</@layout>
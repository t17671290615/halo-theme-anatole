<#include "./module/layout.ftl" />
<@layout title="归档 - ${blog_title!}">
  <div class="archive animated fadeInDown">
    <ul class="list-with-title">
        <#list archives as archive>
          <div class="listing-title">${archive.year?c}</div>
          <ul class="listing">
              <#list archive.posts?sort_by("createTime")?reverse as post>
                <div class="listing-item">
                  <div class="listing-post">
                    <a href="${post.fullPath!}" title="${post.title!}">${post.title!}</a>
                    <div class="post-time">
                      <span class="date">${post.createTime?string("yyyy-MM-dd")}</span>
                    </div>
                  </div>
                </div>
              </#list>
          </ul>
        </#list>
    </ul>
  </div>
    <#if posts.totalPages gt 1>
        <@paginationTag method="archives" page="${posts.number?c}" total="${posts.totalPages?c}" display="3">
          <div class="pagination">
            <ul class="clearfix">
                <#if pagination.hasPrev>
                  <li class="pre">
                    <a class="btn" role="navigation" href="${pagination.prevPageFullPath!}">上一页</a>
                  </li>
                </#if>
                <#if pagination.hasNext>
                  <li class="next">
                    <a class="btn" role="navigation" href="${pagination.nextPageFullPath!}">下一页</a>
                  </li>
                </#if>
            </ul>
          </div>
        </@paginationTag>
    </#if>
</@layout>
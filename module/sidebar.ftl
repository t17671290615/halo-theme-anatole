<div class="sidebar animated fadeInDown">
    <div class="logo-title">
        <div class="title">
            <img alt="Logo" class="inline-block" src="<#if blog_logo?? && blog_logo!=''>${blog_logo!}<#else>${user.avatar!}</#if>" style="width:127px;<#if settings.avatar_circle!true>border-radius:50%</#if>" />
            <h3>
                <a href="${blog_url!}">${blog_title!}</a>
            </h3>
            <div class="description">
                <#if settings.hitokoto!false>
                    <p id="hitokoto">获取中...</p>
                <#else >
                    <p>${user.description!}</p>
                </#if>
            </div>
        </div>
    </div>
    <#include "social-list.ftl">
    <div class="footer">
        <a target="_blank" href="#">
            <span>Designed by </span>
            <a href="https://www.caicai.me">CaiCai</a>
            <div class="by_halo">
                <a href="https://halo.run" target="_blank">Proudly published with Halo&#65281;</a>
            </div>
            <div class="footer_text">
                <@global.footer_info />
            </div>
        </a>
    </div>
</div>

using RI_Live_Sportsbook_ASPNetCore_SignalR;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddSignalR();
builder.Services.AddCors();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

// TODO: set cors  


app.UseCors(builder => builder
    .AllowAnyOrigin()
       .AllowAnyMethod()
          .AllowAnyHeader()
              
                );

app.MapHub<LiveSportBoardHub>("/livesportboardhub");

app.Run();
